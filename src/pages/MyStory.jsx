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
            // Get the document reference for the specified storyId
            const storyRef = doc(storiesRef, storyId);

            // Fetch the document data using getDoc
            const storyDoc = await getDoc(storyRef);

            // If the document exists, destructure its data
            if (storyDoc.exists()) {
                const { storyData, ...otherData } = storyDoc.data();
                // Set the state with the destructured data
                setStory({ id: storyDoc.id, ...storyData, ...otherData });
            } else {
                // If the document doesn't exist, set the state to null
                setStory(null);
            }
        } catch (error) {
            // Handle errors and set the state to null in case of an error
            console.error('Error getting story:', error);
            setStory(null);
        }
    };


    useEffect(() => {
        getStoryById(id);
        getCommentsById(id);
    }, []);
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