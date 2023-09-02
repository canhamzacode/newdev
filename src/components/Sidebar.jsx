import { Box, Button, Card, Stack, Typography } from '@mui/material'
import React from 'react'
import SendMessage from '../components/SendMessage'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
const paperAlign = {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background: "#fff"
}

const Sidebar = ({ toggle, stateValue }) => {
    const theme = useTheme()
    return (
        //     <div className='absolute w-full h-screen bg-black/80 top-0 left-0 duration-100 z-10 hidden'>
        //         <Box sx={{ padding: "20px", width: "80%", height: "100%", overflowY: "auto", display: { xs: "none", md: "grid" }, position: { xs: "absolute" }, background: "hsla(0,3%,94%,.831)", zIndex: "10" }}>
        //             <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <>
            <div className={`absolute w-full h-screen bg-black/80 top-0 left-0 duration-100 z-10 ${stateValue ? "flex" : ""}`}>
                <Box sx={{ padding: "20px", width: "80%", height: "100%", overflowY: "auto", display: { xs: "none", md: "grid" }, position: stateValue ? "absolute" : "", background: "hsla(0,3%,94%,.831)" }}>
                    <Box sx={{
                        fontSize: "30px",
                        fontWeight: "800",
                        color: theme.palette.plainDark.main,
                    }} className="logo" >
                        <Link to={"/"} >
                            Tech Tribe
                        </Link>
                    </Box> <br />
                    <Stack direction={"column"} sx={{
                        display: "grid",
                        alignItems: "center",
                        gap: "10px",
                        width: "100%"
                    }}>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            background: "#fff",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}>
                            <AccountCircleIcon sx={{ height: "40px", width: "40px" }} />
                            <Typography variant='p' sx={{ fontWeight: "500" }}>
                                Abdullah
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            background: "#fff",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}>
                            <AccountCircleIcon sx={{ height: "40px", width: "40px" }} />
                            <Typography variant='p' sx={{ fontWeight: "500" }}>
                                Abdullah
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            background: "#fff",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}>
                            <AccountCircleIcon sx={{ height: "40px", width: "40px" }} />
                            <Typography variant='p' sx={{ fontWeight: "500" }}>
                                Abdullah
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            background: "#fff",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}>
                            <AccountCircleIcon sx={{ height: "40px", width: "40px" }} />
                            <Typography variant='p' sx={{ fontWeight: "500" }}>
                                Abdullah
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            background: "#fff",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}>
                            <AccountCircleIcon sx={{ height: "40px", width: "40px" }} />
                            <Typography variant='p' sx={{ fontWeight: "500" }}>
                                Abdullah
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            background: "#fff",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}>
                            <AccountCircleIcon sx={{ height: "40px", width: "40px" }} />
                            <Typography variant='p' sx={{ fontWeight: "500" }}>
                                Abdullah
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            background: "#fff",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}>
                            <AccountCircleIcon sx={{ height: "40px", width: "40px" }} />
                            <Typography variant='p' sx={{ fontWeight: "500" }}>
                                Abdullah
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            background: "#fff",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}>
                            <AccountCircleIcon sx={{ height: "40px", width: "40px" }} />
                            <Typography variant='p' sx={{ fontWeight: "500" }}>
                                Abdullah
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            background: "#fff",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}>
                            <AccountCircleIcon sx={{ height: "40px", width: "40px" }} />
                            <Typography variant='p' sx={{ fontWeight: "500" }}>
                                Abdullah
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </div>
        </>
    )
}

export default Sidebar