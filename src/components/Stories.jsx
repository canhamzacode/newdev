import { Box } from '@mui/material';
import Story from './Story';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Stories = () => {
    const [stories, setStories] = useState(null);
    const [comments, setComments] = useState(null);
    // console.log(stories);
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/story/${id}`);
    }

    const getAllStories = async () => {
        try {
            const storiesCollection = collection(db, 'stories');
            const storiesSnapshot = await getDocs(storiesCollection);

            const stories = [];
            storiesSnapshot.forEach((doc) => {
                const storyData = { id: doc.id, ...doc.data() };
                stories.push(storyData);
            });

            // Sort the stories in descending order based on the date
            const sortedStories = stories.sort((a, b) => b.date - a.date);

            setStories(sortedStories);
        } catch (error) {
            console.error('Error fetching stories:', error);
        }
    };


    useEffect(() => {
        getAllStories();
    }, [stories]);

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "550px",
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                alignItems: "center",
                justifyContent: "center",
                marginX: "auto"
            }}
        >
            {stories && stories.map((story) => (
                <div key={story?.id} onClick={() => handleNavigate(story?.id)} className='cursor-pointer w-full'>
                    <Story story={story} />
                </div>
            ))}
        </Box>
    );
};

export default Stories;