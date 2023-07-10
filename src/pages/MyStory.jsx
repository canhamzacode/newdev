import React, { useContext, useEffect, useState } from 'react'
import Story from '../components/Story'
import { Box } from '@mui/material'
import Comment from '../components/Comment'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../config/firebase'
import AddComment from '../components/AddComment'
import { AuthContext } from '../AuthProvider'

const MyStory = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [comments, setComments] = useState(null);
    // console.log(comments);
    const [story, setStory] = useState(null)
    const storiesRef = collection(db, 'stories');

    const getCommentsById = async (postId) => {
        try {
            const commentsCollection = collection(db, 'comments');
            const commentsQuery = query(commentsCollection, where('postId', '==', postId));
            const commentsSnapshot = await getDocs(commentsQuery);

            const comments = [];
            commentsSnapshot.forEach((doc) => {
                const commentData = { id: doc.id, ...doc.data() };
                comments.push(commentData);
            });

            setComments(comments);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const getStoryById = async (storyId) => {
        try {
            const storyDoc = await getDoc(doc(storiesRef, storyId));

            if (storyDoc.exists()) {
                setStory(storyDoc.data());
            } else {
                setStory(null);
            }
        } catch (error) {
            console.error('Error getting story:', error);
            setStory(null);
        }
    };

    useEffect(() => {
        getStoryById(id);
        getCommentsById(id);
    }, [id, story]);
    return (
        <Box sx={{
            width: "100%",
            maxWidth: "550px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            alignItems: "center",
            justifyContent: "center",
            marginX: "auto",
            marginTop: "55px"
        }}>
            <Story story={story} />
            <AddComment storyId={id} />
            <Box sx={{ width: "100%" }}>
                {comments && comments.map((comment) => (
                    <div key={comment?.id} className='cursor-pointer'>
                        <Comment comment={comment} />
                    </div>
                ))}
            </Box>
        </Box>
    )
}

export default MyStory