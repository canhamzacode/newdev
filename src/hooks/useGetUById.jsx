import { useState, useEffect } from 'react';
import { doc, collection, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const useUserById = (userId) => {
    const [myUserDb, setMyUserDb] = useState(null);
    const usersRef = collection(db, 'users');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userDoc = await getDoc(doc(usersRef, userId));

                if (userDoc.exists()) {
                    setMyUserDb(userDoc.data());
                } else {
                    setMyUserDb(null);
                }
            } catch (error) {
                console.error('Error getting user:', error);
                setMyUserDb(null);
            }
        };

        if (userId) {
            fetchUser();
        } else {
            setMyUserDb(null);
        }
    }, [userId]);

    return myUserDb;
};

export default useUserById;