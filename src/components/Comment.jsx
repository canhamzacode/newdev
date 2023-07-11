import { Avatar, Box, Card, CardContent, IconButton, Stack, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useEffect, useState } from 'react'
import DiamondIcon from '@mui/icons-material/Diamond';
import { useTheme } from '@mui/material/styles';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Link } from 'react-router-dom';
import useUserById from '../hooks/useGetUById';

const Comment = ({ comment }) => {
    // console.log(comment);
    const authorId = comment?.authorId;
    const usersRef = collection(db, 'users');

    const myUserDb = useUserById(userId);

    const theme = useTheme();
    return (
        <Card sx={{
            padding: {
                md: "20px", xs: "10px",
            },
            background: theme.palette.story.main,
            color: theme.palette.storyText.main,
            borderBottom: "1px solid"
        }}>
            <Stack direction={"row"} sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
            }}>
                <Stack direction={"row"} sx={{ display: "flex", alignItems: "center", gap: "15px", justifyContent: "space-between" }}>
                    <div className="profileImg">
                        <img src={myUserDb?.profileImage || ""} alt="profile" />
                    </div>
                    <Box className="flex flex-col">
                        <span className='flex items-center justify-center gap-3 overflow-hidden whitespace-nowrap'>
                            <Link to={`/${myUserDb?.username}`}>
                                <Typography
                                    variant='h6'
                                    sx={{
                                        fontSize: { xs: "17px" },
                                        fontWeight: "500"
                                    }}
                                >
                                    {myUserDb?.username}
                                </Typography>
                            </Link>
                            <span>
                                <DiamondIcon />
                            </span>
                            <Typography variant='p'>
                                {myUserDb?.storyCount}
                            </Typography>
                        </span>
                        <span>
                            <Typography
                                variant='p'
                                sx={{ fontSize: "12px", overflowX: "hidden", whiteSpace: "nowrap" }}
                            >
                                {myUserDb?.title}
                            </Typography>
                        </span>
                        <span className='flex items-center gap-3'>
                            <Typography variant='p' sx={{ fontSize: "11px" }}>
                                {/* {console.log(story)} */}
                                {comment?.date}
                            </Typography>

                        </span>
                    </Box>
                </Stack>
                <IconButton aria-label="settings" sx={{
                    color: theme.palette.storyText.main
                }}>
                    <MoreVertIcon />
                </IconButton>

            </Stack>
            <CardContent sx={{
                background: theme.palette.primary.main
            }}>
                <Typography variant='p'>
                    {comment?.content}
                </Typography>
            </CardContent>
        </Card >
    )
}

export default Comment