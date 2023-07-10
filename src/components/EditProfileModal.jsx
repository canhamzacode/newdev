import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { doc, getDoc, setDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import { AuthContext } from '../AuthProvider';

const EditProfileModal = ({ openModal, handleClose }) => {
    const user = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        setCurrentUser(user.user);
    }, [user]);

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
        height: '80vh',
        overflowY: 'auto',
    };

    const schema = yup.object().shape({
        title: yup.string().required(),
        bio: yup.string().required(),
        phoneNumber: yup.string(),
        linkedin: yup.string().url('Invalid LinkedIn link'),
        youtube: yup.string().url('Invalid YouTube link'),
        github: yup.string().url('Invalid GitHub link'),
    });

    const { handleSubmit, reset, formState: { errors }, register, setValue } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        if (currentUser) {
            const { username, title, bio, phoneNumber, linkedin, youtube, github } = currentUser;
            setValue('username', username || '');
            setValue('title', title || '');
            setValue('bio', bio || '');
            setValue('phoneNumber', phoneNumber || '');
            setValue('linkedin', linkedin || '');
            setValue('youtube', youtube || '');
            setValue('github', github || '');
        }
    }, [currentUser, setValue]);

    const onUpdateProfile = async (data) => {
        console.log(data);
        try {
            const userRef = doc(collection(db, 'users'), currentUser.userId);
            const userDoc = await getDoc(userRef);
            const currentStoryCount = userDoc.data()?.storyCount || 0;

            await setDoc(userRef, data, { merge: true });
            alert('Profile Updated');
            handleClose();
            reset();
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <Modal
            keepMounted
            open={openModal}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style} className="gap-2">
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        Update Profile
                    </Typography>
                    <div onClick={handleClose} className="cursor-pointer">
                        X
                    </div>
                </Box>
                <form className="w-full grid gap-2" onSubmit={handleSubmit(onUpdateProfile)}>
                    <Stack>
                        <label htmlFor="title">
                            <Typography variant="p">Title</Typography>
                        </label>
                        <input type="text" placeholder="" {...register('title')} />
                        {errors?.title && <p className="text-red-700">{errors.title.message}</p>}
                    </Stack>
                    <Stack>
                        <label htmlFor="bio">
                            <Typography variant="p">Bio</Typography>
                        </label>
                        <textarea className="storytext" placeholder="" {...register('bio')} />
                    </Stack>
                    <Stack>
                        <label htmlFor="phoneNumber">
                            <Typography variant="p">Phone Number</Typography>
                        </label>
                        <input type="text" placeholder="" {...register('phoneNumber')} />
                    </Stack>
                    <Stack>
                        <label htmlFor="linkedin">
                            <Typography variant="p">Linkedin</Typography>
                        </label>
                        <input type="text" placeholder="" {...register('linkedin')} />
                        {errors?.linkedin && <p className="text-red-700">{errors.linkedin.message}</p>}
                    </Stack>
                    <Stack>
                        <label htmlFor="youtube">
                            <Typography variant="p">Youtube</Typography>
                        </label>
                        <input type="text" placeholder="" {...register('youtube')} />
                        {errors?.youtube && <p className="text-red-700">{errors.youtube.message}</p>}
                    </Stack>
                    <Stack>
                        <label htmlFor="github">
                            <Typography variant="p">Github</Typography>
                        </label>
                        <input type="text" placeholder="" {...register('github')} />
                        {errors?.github && <p className="text-red-700">{errors.github.message}</p>}
                    </Stack>
                    <input type="submit" value="Submit" />
                </form>
            </Box>
        </Modal>
    );
};

export default EditProfileModal;
