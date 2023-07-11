import React, { useContext, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Box, Stack } from '@mui/material';
import { storage, db } from '../config/firebase';
import { v4 as uuidv4 } from 'uuid';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const CreateArticle = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [imageUpload, setImageUpload] = useState(null);
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [userDataLoaded, setUserDataLoaded] = useState(false); // Track user data loading

    useEffect(() => {
        if (user && user.userId === import.meta.env.VITE_API_ADMIN) {
            setUserDataLoaded(true);
        }
    }, [user]);

    const uploadImage = async () => {
        if (imageUpload === null) return;

        const imageName = `${uuidv4()}_${imageUpload.name}`;
        const imageRef = ref(storage, `images/${imageName}`);

        try {
            await uploadBytes(imageRef, imageUpload);
            const imageUrl = await getDownloadURL(imageRef);
            createNewPost(imageUrl);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const createNewPost = async (imageUrl) => {
        try {
            const articlesRef = collection(db, 'articles');

            const postData = {
                title,
                summary,
                content,
                imageUrl,
            };

            await addDoc(articlesRef, postData);

            // Reset form values
            setTitle('');
            setSummary('');
            setContent('');

            alert('Post created successfully');
            navigate("/");
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post');
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        uploadImage();
    };

    // Check if user data is loaded before rendering
    if (!userDataLoaded) {
        return null; // or return a loading indicator, redirect, or any other desired behavior
    }

    // Check if user ID matches the one in the environment
    if (user?.userId !== import.meta.env.VITE_API_ADMIN) {
        navigate('/');
    }

    return (
        <Box sx={{ marginTop: '40px' }}>
            <form onSubmit={handleFormSubmit}>
                <Stack sx={{ gap: '10px' }}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Summary"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                    />
                    <input type="file" onChange={(e) => setImageUpload(e.target.files[0])} />
                    <ReactQuill value={content} onChange={setContent} />
                    <button
                        style={{ marginTop: '5px', background: 'grey', padding: '10px 0', borderRadius: '8px' }}
                        type="submit"
                    >
                        Create Post
                    </button>
                </Stack>
            </form>
        </Box>
    );
};

export default CreateArticle;