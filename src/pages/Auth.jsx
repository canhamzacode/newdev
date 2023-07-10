import { Box, Button, Stack } from '@mui/material';
import authFormIllustration from "../assets/image/authFormIllustration.svg";
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, db } from '../config/firebase';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthContext } from '../AuthProvider';
import { useContext } from 'react';


const Auth = ({ loading }) => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const { setMyUserDb } = useContext(AuthContext);

    const usersRef = collection(db, 'users');

    const checkUserExistence = async (userId) => {
        try {
            const userRef = doc(usersRef, userId);
            const docData = await getDoc(userRef);
            return docData.exists();
        } catch (error) {
            // Handle the error here
            console.error("Error checking user existence:", error);
            return false; // Assuming user doesn't exist in case of error
        }
    };



    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            if (user && user.uid) {
                const authenticatedUserId = user.uid;

                const isUserExisting = await checkUserExistence(authenticatedUserId);

                if (isUserExisting) {
                    // User exists in the database, navigate to the desired page
                    navigate("/");
                } else {
                    // User schema doesn't exist, create the user schema and redirect
                    const userData = {
                        userId: authenticatedUserId,
                        email: user.email,
                        username: user.displayName,
                        phoneNumber: "",
                        title: "Tech Enthusiast",
                        profileImage: user.photoURL,
                        github: "",
                        youtube: "",
                        twitter: "",
                        linkedin: "",
                        bio: "",
                        storyCount: 0,
                        followers: 0,
                        following: 0,
                    };

                    // Create the user schema in Firestore
                    await setDoc(doc(usersRef, authenticatedUserId), userData);

                    // Update the user context or perform any other necessary actions
                    setMyUserDb(userData);

                    // Navigate to the desired page
                    navigate("/");
                }
            } else {
                console.error("Error signing in with Google: User information not available.");
            }
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };


    if (loading) {
        return ("Loading")
    }
    return (
        <Box className="" sx={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }} >
            <Stack direction={'row'} sx={{ padding: { xs: "0", md: "25px", height: "100%" }, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* <Box></Box> */}
                <Box width={"100%"} sx={{ display: "flex", alignItems: "center", justifyContent: "center", padding: { xs: "0", md: "25px" }, position: "relative", height: "100%", background: "#1a2958", borderRadius: "8px" }}>
                    <img src={authFormIllustration} className='h-full' />
                    <Button sx={{ position: "absolute", zIndex: "2" }} style={{ background: "white", color: "#000" }} onClick={signInWithGoogle}>
                        Sign In With Google
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
};

export default Auth;