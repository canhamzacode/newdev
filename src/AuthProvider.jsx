import React, { createContext, useState, useEffect } from 'react';
import { auth } from './config/firebase';
import { doc, collection, getDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db } from './config/firebase';
import useUserById from './hooks/useGetUById';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [myUserDb, setMyUserDb] = useState(null);
    let a = useUserById(user?.uid)

    const handleLogout = () => {
        auth.signOut();
        setMyUserDb(null); // Clear the user data
    };

    useEffect(() => {
        const fetchUser = async () => {
            if (user) {
                const userId = user.uid;

                setMyUserDb(a);
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
