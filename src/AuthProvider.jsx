import React, { createContext, useState, useEffect } from 'react';
import { auth } from './config/firebase';
import { doc, collection, getDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db } from './config/firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [myUserDb, setMyUserDb] = useState(null);
    // console.log(myUserDb);
    const usersRef = collection(db, 'users');

    const getUserById = async (userId) => {
        try {
            const userDoc = await getDoc(doc(usersRef, userId));

            if (userDoc.exists()) {
                setMyUserDb(userDoc.data());
                return userDoc.data();
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error getting user:', error);
            return null;
        }
    };
    const handleLogout = () => {
        auth.signOut();
        setMyUserDb(null); // Clear the user data
    };

    useEffect(() => {
        const fetchUser = async () => {
            if (user) {
                const userId = user.uid;
                setMyUserDb(getUserById(userId));
            } else {
                setMyUserDb(null);
            }
        };

        fetchUser();
    }, [user]);


    const authContextValue = {
        user: myUserDb,
        logout: handleLogout,
        setMyUserDb
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
