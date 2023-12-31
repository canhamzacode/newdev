import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { AuthContext } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useDate } from '../hooks/useDate';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 600,
    width: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'grid',
};

const MyModal = ({ openModal, toggleModal }) => {
    const [formattedDate] = useDate();

    const navigate = useNavigate();
    const user = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setCurrentUser(user.user);
    }, [user]);

    const schema = yup.object().shape({
        content: yup.string().required('This field is required'),
        link: yup.string(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [isLoading, setIsLoading] = useState(false);
    const storyRef = collection(db, 'stories');

    const onCreateStory = async (data) => {
        setIsLoading(true);
        try {
            const storyData = {
                ...data,
                userId: user?.user?.userId,
                date: formattedDate,
            };

            await addDoc(storyRef, storyData);

            const userRef = doc(collection(db, 'users'), currentUser.userId);
            const userDoc = await getDoc(userRef);
            const currentStoryCount = userDoc.data()?.storyCount || 0;
            let updatedCount = { storyCount: currentStoryCount + 1 };
            await setDoc(userRef, updatedCount, { merge: true });

            toggleModal();
            reset();
            navigate(0);
            navigate('/');
            alert('Post created successfully');
        } catch (error) {
            console.error('Error creating post:', error);
            setError('Failed to create post');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal
            keepMounted
            open={openModal}
            onClose={toggleModal}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style} className="gap-2">
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        Add Story
                    </Typography>
                    <Button onClick={toggleModal}>X</Button>
                </Box>
                <form className="w-full grid gap-2" onSubmit={handleSubmit(onCreateStory)}>
                    <textarea
                        className="storytext"
                        {...register('content')}
                        placeholder="What did you learn or build today?"
                    />
                    {errors.content && <p className="text-red-700">{errors.content.message}</p>}
                    <input type="text" {...register('link')} placeholder="Github link (optional)" />
                    {error && <p className="text-red-700">{error}</p>}
                    <button type="submit" className="heroBtn" disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Submit'}
                    </button>
                </form>
            </Box>
        </Modal>
    );
};

export default MyModal;