import { Box, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../config/firebase"
import { AuthContext } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useDate } from '../hooks/useDate'

const AddComment = ({ storyId }) => {
    const { user } = useContext(AuthContext);

    const [formattedDate] = useDate();

    const schema = yup.object().shape({
        content: yup.string().required("This field is required"),
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const commentRef = collection(db, "comments");

    const [isLoading, setIsLoading] = useState(false); // Loading state

    const navigate = useNavigate();

    const onCreateComment = async (data) => {
        try {
            setIsLoading(true); // Set loading state to true
            await addDoc(commentRef, {
                ...data,
                authorId: user?.userId,
                date: formattedDate,
                postId: storyId
            });
            reset();
            navigate(0);
        } catch (error) {
            console.error("Error creating comment:", error);
        } finally {
            setIsLoading(false); // Set loading state back to false
        }
    }

    return (
        <Box sx={{ width: "100%", display: "grid" }}>
            {user && (
                <form className='grid gap-1' onSubmit={handleSubmit(onCreateComment)}>
                    <textarea type="text" className='w-full p-2' placeholder='People Like to See Your Comment' {...register('content')} />
                    {errors.content && <Typography variant='p' sx={{ color: "red" }}>{errors.content.message}</Typography>}
                    <button type="submit" className='heroBtn' disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Submit'}
                    </button>
                </form>
            )}
        </Box>
    )
}

export default AddComment