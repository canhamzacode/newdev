import { Avatar, Box, Card, CardActions, CardContent, CardHeader, IconButton, Stack, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useEffect, useState } from 'react';
import DiamondIcon from '@mui/icons-material/Diamond';
import CommentIcon from '@mui/icons-material/Comment';
import TimelineIcon from '@mui/icons-material/Timeline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ThemeContext } from '../ThemeProvider';
import { useTheme } from '@mui/material/styles';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Link } from 'react-router-dom';
import useUserById from '../hooks/useGetUById';

const Story = ({ story }) => {
    const authorId = story?.userId;
    const myUserDb = useUserById(authorId)


    const theme = useTheme();

    return (
        <Card
            sx={{
                padding: {
                    md: "20px",
                    xs: "10px",
                },
                background: theme.palette.story.main,
                color: theme.palette.storyText.main,
                width: "100%"
            }}
        >
            <Stack
                direction="row"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    flexWrap: "wrap",
                    width: "100%"
                }}
            >
                <Stack
                    direction="row"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        justifyContent: "space-between"
                    }}
                >
                    {/* <Avatar /> */}
                    <div className="profileImg">
                        <img src={myUserDb?.profileImage || ""} alt="profile" />
                    </div>
                    <Box className="flex flex-col w-full">
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
                                {story?.date}
                            </Typography>

                        </span>
                    </Box>
                </Stack>
                {/* <IconButton
                    aria-label="settings"
                    sx={{
                        color: theme.palette.storyText.main
                    }}
                >
                    <MoreVertIcon />
                </IconButton> */}
            </Stack>
            <CardContent>
                <Typography variant='p'>
                    {story?.content}
                </Typography>
            </CardContent>
            {/* <CardActions
                sx={{ display: "flex", gap: "15px" }}
            >
                <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                    <IconButton
                        aria-label="settings"
                        sx={{
                            color: theme.palette.storyText.main
                        }}
                    >
                        <CommentIcon />
                    </IconButton>
                    <Typography variant='p'>
                        6
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                    <IconButton
                        aria-label="settings"
                        sx={{
                            color: theme.palette.storyText.main
                        }}
                    >
                        <TimelineIcon />
                    </IconButton>
                    <Typography variant='p'>
                        6
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                    <IconButton
                        aria-label="settings"
                        sx={{
                            color: theme.palette.storyText.main
                        }}
                    >
                        <FavoriteBorderIcon />
                    </IconButton>
                    <Typography variant='p'>
                        6
                    </Typography>
                </Box>
            </CardActions> */}
        </Card>
    );
};

export default Story;