import React, { useEffect, useState, useContext } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShareIcon from '@mui/icons-material/Share';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
// import { db } from '../config/firebase';
import ProfileCard from '../components/ProfileCard';
import Stories from '../components/Stories';
import Story from '../components/Story';
import { AuthContext, AuthProvider } from '../AuthProvider';
import EditProfileModal from '../components/EditProfileModal';
import { db } from '../config/firebase';
const UserProfile = () => {
    // const { user } = AuthProvider();
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [certainUser, setCertainUser] = useState(null);
    const [userStories, setUserStories] = useState(null);
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();

    const [editModal, setEditModal] = useState(false);
    const handleOpenEditModal = () => setEditModal(true);
    const handleCloseEditModal = () => setEditModal(false);


    const fetchUserStories = async (userId) => {
        try {
            const storiesQuerySnapshot = await getDocs(
                query(collection(db, 'stories'), where('userId', '==', userId))
            );
            const stories = [];

            storiesQuerySnapshot.forEach((doc) => {
                const storyData = { id: doc.id, ...doc.data() };
                stories.push(storyData);
            });
            setUserStories(stories);
        } catch (error) {
            console.error('Error fetching user stories:', error);
        }
    };

    const getUserByName = async (username) => {
        try {
            const usersRef = collection(db, 'users');
            const querySnapshot = await getDocs(
                query(usersRef, where('username', '==', username))
            );

            if (!querySnapshot.empty) {
                // User found, return the user data
                const userDoc = querySnapshot.docs[0];
                setCertainUser(userDoc.data());

                const userId = userDoc.data()?.userId;
                setUserId(userId);

                return userDoc.data();
            }
        } catch (error) {
            console.error('Error getting user:', error);
            return null;
        }
    };
    const handleNavigate = (id) => {
        navigate(`/story/${id}`);
    }
    useEffect(() => {
        getUserByName(id);
        fetchUserStories(userId);
    }, [id, userId]);

    return (
        <Box className="my-10">
            <EditProfileModal handleOpen={handleOpenEditModal} openModal={editModal} handleClose={handleCloseEditModal} />
            <Stack
                direction="row"
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                }}
            >
                <Box
                    sx={{
                        alignContent: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        padding: '25px',
                        marginTop: '45px',
                        width: '100%',
                    }}
                >
                    <ProfileCard username={certainUser?.username} count={certainUser?.storyCount} profileImage={certainUser?.profileImage} currentUserId={user?.userId} authorId={certainUser?.userId} handleOpen={handleOpenEditModal} />
                </Box>
                <Box
                    sx={{
                        alignContent: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        padding: '25px',
                        marginTop: '45px',
                        width: '100%',
                    }}
                >
                    <Stack
                        sx={{
                            background: '#f8b93d',
                            width: '100%',
                            borderRadius: '8px',
                            padding: '20px',
                            alignItems: 'center',
                            gap: '10px',
                            maxWidth: '550px',
                        }}
                    >
                        <Box sx={{ marginBottom: '5px' }}>
                            <Typography variant="h5">Links</Typography>
                        </Box>
                        <Box sx={{ width: '100%', background: '#d08a00', padding: '10px', borderRadius: '8px' }}>
                            <Stack direction="row" sx={{ width: '100%', justifyContent: 'space-around' }}>
                                {certainUser?.twitter && <Link to={certainUser?.twitter}>
                                    <TwitterIcon sx={{ fontSize: '40px', color: "blue" }} />
                                </Link>}
                                {certainUser?.linkedin && <Link to={certainUser?.linkedin}>
                                    <LinkedInIcon sx={{ fontSize: '40px', color: "blue" }} />
                                </Link>}
                                {certainUser?.youtube && <Link to={certainUser?.youtube}>
                                    <YouTubeIcon sx={{ fontSize: '40px' }} />
                                </Link>}
                                {certainUser?.github && <Link to={certainUser?.github}>
                                    <GitHubIcon sx={{ fontSize: '40px' }} />
                                </Link>}
                            </Stack>
                        </Box>
                        {/* <Box>
                            <Button color="primary" sx={{ background: '#d08a00' }}>+ Add Custom Link</Button>
                        </Box> */}
                    </Stack>
                </Box>
                {/* {certainUser?.github && <Box
                    sx={{
                        alignContent: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        padding: '25px',
                        marginTop: '45px',
                        width: '100%',
                    }}
                >
                    <Stack
                        sx={{
                            background: '#f8b93d',
                            width: '100%',
                            borderRadius: '8px',
                            padding: '20px',
                            alignItems: 'center',
                            gap: '10px',
                            maxWidth: '550px',
                        }}
                    >
                        <Box sx={{ marginBottom: '5px' }}>
                            <Typography variant="h5">Hamzat Abdul-muizz's GitHub projects</Typography>
                        </Box>
                        <Stack direction="column" sx={{ gap: '10px', width: '100%' }}>
                            <Box sx={{ width: '100%', background: '#d08a00', padding: '10px', borderRadius: '8px' }}>
                                <Link to="/">
                                    <Stack direction="row" sx={{ width: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                        <GitHubIcon sx={{ fontSize: '40px' }} />
                                        <Typography variant="h6">test</Typography>
                                        <ShareIcon sx={{ fontSize: '30px' }} />
                                    </Stack>
                                </Link>
                            </Box>
                            <Box sx={{ width: '100%', background: '#d08a00', padding: '10px', borderRadius: '8px' }}>
                                <Link to="/">
                                    <Stack direction="row" sx={{ width: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                        <GitHubIcon sx={{ fontSize: '40px' }} />
                                        <Typography variant="h6">test</Typography>
                                        <ShareIcon sx={{ fontSize: '30px' }} />
                                    </Stack>
                                </Link>
                            </Box>
                            <Box sx={{ width: '100%', background: '#d08a00', padding: '10px', borderRadius: '8px' }}>
                                <Link to="/">
                                    <Stack direction="row" sx={{ width: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                        <GitHubIcon sx={{ fontSize: '40px' }} />
                                        <Typography variant="h6">test</Typography>
                                        <ShareIcon sx={{ fontSize: '30px' }} />
                                    </Stack>
                                </Link>
                            </Box>
                        </Stack>
                        <Box>
                            <Button color="primary" sx={{ background: '#d08a00' }}>See more on GitHub</Button>
                        </Box>
                    </Stack>
                </Box>} */}
                <Box
                    sx={{
                        marginTop: '30px',
                        width: '100%',
                        padding: { md: '30px', xs: '10px' },
                        display: 'flex',
                        // alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: "column",
                        gap: "10px"
                    }}
                >
                    {/* <Stories className="mt-4" userStories={userStories} /> */}
                    {userStories && userStories.map((story) => (

                        <div key={story?.id} onClick={() => handleNavigate(story?.id)} className='cursor-pointer w-full storyBox'>
                            <Story story={story} />
                        </div>
                    ))}
                </Box>
            </Stack>
        </Box>
    );
}

export default UserProfile;