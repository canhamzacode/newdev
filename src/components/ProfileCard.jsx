import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, IconButton, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import DiamondIcon from '@mui/icons-material/Diamond';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';

const ProfileCard = ({ username, count, profileImage, currentUserId, authorId, handleOpen }) => {
    const theme = useTheme();
    return (
        <Card sx={{
            padding: "20px", width: "100%", position: "relative", maxWidth: "550px",
            background: theme.palette.story.main,
            color: theme.palette.storyText.main,
        }}>
            {/* <IconButton sx={{ background: "#1a2958", position: "absolute", right: "20px" }}>
                <AddIcon sx={{ color: "#fff" }} />
            </IconButton> */}
            <Stack sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                {/* <Box sx={{ width: "65px", height: "65px", background: "red", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", padding: "5px" }}>
                    <Avatar sx={{ width: "100%", height: "100%" }} />
                </Box> */}
                <div className="profileImg">
                    <img src={profileImage || ""} alt="profile" />
                </div>
                <Box className="flex items-center justify-center gap-2 flex-wrap" sx={{
                    gap: { md: "15px", xs: "5px" },
                }} >
                    <Typography variant='h5'>
                        {username}
                    </Typography>
                    <DiamondIcon />
                    <Typography variant='p'>
                        {count}
                    </Typography>
                </Box>
            </Stack>
            <Box className="flex items-center justify-center">
                <Typography variant='p' >
                    Tech
                </Typography>
            </Box>

            <CardActions sx={{ display: "flex", gap: { md: "15px", sx: "5px" }, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
                {authorId == currentUserId ? <Button className='heroBtn' onClick={handleOpen}>
                    Edit Profile
                </Button> : ""}
                <IconButton>
                    <ShareIcon sx={{
                        background: theme.palette.story.main,
                        color: theme.palette.storyText.main,
                    }} />
                </IconButton>
            </CardActions>
        </Card >
    )
}

export default ProfileCard