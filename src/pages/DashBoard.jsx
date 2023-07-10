import { Box, Stack, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import ProfileCard from '../components/ProfileCard'
import Stories from '../components/Stories'
import { AuthContext } from '../AuthProvider';
import { useTheme } from '@emotion/react';

const DashBoard = () => {
    const user = useContext(AuthContext);
    const theme = useTheme();
    return (
        <Box className="my-10">
            <Stack direction={"row"} sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "0.5fr 1fr" },
                gap: "10px",
                alignItems: "start"
            }}>
                <Box
                    sx={{
                        alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", padding: "25px", marginTop: "45px",
                    }}>
                    <ProfileCard username={user?.user?.username} count={user?.user?.storyCount} profileImage={user?.user?.profileImage} currentUserId={""} authorId={user?.user?.userId} />
                </Box>
                <Box sx={{
                    marginTop: "30px",
                    width: "100%",
                    padding: { md: "30px", xs: "10px" }
                }}>
                    <Typography variant='h4' className='mb-3 text-center' sx={{
                        color: theme.palette.storyText.main,
                    }}>
                        Featured
                    </Typography><br />
                    <Stories className="mt-4" />
                </Box>
            </Stack >
        </Box >
    )
}

export default DashBoard