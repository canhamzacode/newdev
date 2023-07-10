import { Box, Button, Card, CardContent, CardHeader, Stack, Typography, IconButton } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from 'react'
import { useTheme } from '@emotion/react';
import { ThemeContext } from '../ThemeProvider'


const Membership = () => {
    const theme = useTheme();
    // plainDark: {
    //     main: "#000"
    // },
    // plainLight: {
    //     main: "#fff"
    // }
    return (
        <Box className="my-10">
            <Stack direction={"column"} sx={{
                width: { sm: "100%", md: "80%" },
                marginX: "auto",
                padding: "25px",
                marginTop: "80px",
                textAlign: "center"
            }}>
                <Typography variant='h5' sx={{ color: theme.palette.storyText.main, }}>
                    Choose A Plan
                </Typography>
                <Stack direction={"row"} sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
                    gap: "20px",
                    width: "100%",
                }}>
                    <Card sx={{
                        paddingY: "15px",
                        color: theme.palette.storyText.main, background: theme.palette.story.main
                    }}>
                        <Box>
                            <Button sx={{ width: "80%", background: "linear-gradient(118.57deg,#ffce6d 32.37%,#f8b93d 56.02%),#c9ad8d" }}>
                                Free User
                            </Button>
                        </Box>
                        <CardContent sx={{ display: "grid", gap: "15px", textAlign: "left" }}>
                            <Stack direction={"row"} sx={{ gap: "10px" }}>
                                <CheckCircleOutlineIcon />
                                <Typography variant='p' className='line-through'>
                                    Web Development course
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{ gap: "10px" }}>
                                <CheckCircleOutlineIcon />
                                <Typography variant='p' className='line-through'>
                                    Streamlined Learning platform
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{ gap: "10px" }}>
                                <CheckCircleOutlineIcon />
                                <Typography variant='p' className='line-through'>
                                    Community member
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{ gap: "10px" }}>
                                <CheckCircleIcon />
                                <Typography variant='p' >
                                    Technical articles
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{ gap: "10px" }}>
                                <CheckCircleIcon />
                                <Typography variant='p' >
                                    Dev profile
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{ gap: "10px" }}>
                                <CheckCircleIcon />
                                <Typography variant='p' >
                                    Dev Stories
                                </Typography>
                            </Stack>
                        </CardContent>

                        <Box>
                            <Button className='heroBtn' >
                                Your Plan
                            </Button>
                        </Box>
                    </Card>
                    <Card sx={{ paddingY: "15px", color: theme.palette.storyText.main, background: theme.palette.story.main }}>
                        <Box>
                            <Button sx={{ width: "80%", background: "linear-gradient(118.57deg,#ffce6d 32.37%,#f8b93d 56.02%),#c9ad8d" }}>
                                Super user
                            </Button>
                        </Box>
                        <CardContent sx={{ display: "grid", gap: "15px", textAlign: "left" }}>
                            <Stack direction={"row"} sx={{ gap: "10px" }}>
                                <CheckCircleIcon />
                                <Typography variant='p' >
                                    Cancel anytime
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{ gap: "10px" }}>
                                <CheckCircleIcon />
                                <Typography variant='p' >
                                    Web Development course
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{ gap: "10px" }}>
                                <CheckCircleIcon />
                                <Typography variant='p' >
                                    Streamlined Learning platform
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{ gap: "10px" }}>
                                <CheckCircleIcon />
                                <Typography variant='p' >
                                    Lifetime access to our Discord
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{ gap: "10px" }}>
                                <CheckCircleIcon />
                                <Typography variant='p' >
                                    Access to technical articles
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{ gap: "10px" }}>
                                <CheckCircleIcon />
                                <Typography variant='p' >
                                    Tutorial videos
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{ gap: "10px" }}>
                                <CheckCircleIcon />
                                <Typography variant='p' >
                                    Dev profile
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{ gap: "10px" }}>
                                <CheckCircleIcon />
                                <Typography variant='p' >
                                    Dev Stories
                                </Typography>
                            </Stack>
                        </CardContent>
                        <Stack direction={"column"} sx={{ gap: "10px" }}>
                            <Box>
                                <Button className='heroBtn'>
                                    ₦1,499/month
                                </Button>
                            </Box>
                            <Box>
                                <Button className='heroBtn' >
                                    ₦14,999/year
                                </Button>
                            </Box>
                            <Box>
                                <Typography variant='p'>
                                    Save ₦3000
                                </Typography>
                            </Box>
                        </Stack>
                    </Card>
                    <Card sx={{
                        paddingY: "15px",
                        color: theme.palette.storyText.main, background: theme.palette.story.main
                    }}>
                        <Box>
                            <Button sx={{ width: "80%", background: "linear-gradient(118.57deg,#ffce6d 32.37%,#f8b93d 56.02%),#c9ad8d" }}>
                                One-time payment
                            </Button>
                        </Box>
                        <CardContent sx={{ display: "grid", gap: "15px", textAlign: "left" }}>
                            <Stack direction={"row"} sx={{ gap: "10px" }}>
                                <CheckCircleIcon />
                                <Typography variant='p' >
                                    Community member
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{ gap: "10px" }}>
                                <CheckCircleIcon />
                                <Typography variant='p' >
                                    Access to our Discord server and technical help
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{ gap: "10px" }}>
                                <CheckCircleOutlineIcon />
                                <Typography variant='p' className='line-through' >
                                    Web Development course
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{ gap: "10px" }}>
                                <CheckCircleOutlineIcon />
                                <Typography variant='p' className='line-through' >
                                    Streamlined Learning platform
                                </Typography>
                            </Stack>
                        </CardContent>
                        <Box>
                            <Button className='heroBtn' >
                                ₦1,000
                            </Button>
                        </Box>
                    </Card>


                </Stack>
            </Stack>
        </Box>
    )
}

export default Membership