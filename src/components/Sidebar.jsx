import { Box, Button, Card, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import SendMessage from '../components/SendMessage'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
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
    const users = [
        { name: 'Abdullah', id: 1 },
        { name: 'John', id: 2 },
        { name: 'Alice', id: 3 },
        // Add more users as needed
    ];
    return (
        <>
            <Box className={` w-full h-screen bg-black/80 top-0 left-0 duration-100 z-10`}
                sx={{
                    display:
                    {
                        xs: stateValue ? "flex" : "none",
                        md: "flex"
                    },
                    position: {
                        xs: "absolute",
                        md: "relative"
                    }
                }}>
                <Box
                    sx={{
                        padding: "20px",
                        width: { xs: "80%", md: "100%" },
                        height: "100%",
                        overflowY: "auto",
                        display:
                        {
                            xs: stateValue ? "flex" : "none",
                            md: "flex"
                        },
                        background: "hsla(0,3%,94%,.831)",
                        flexDirection: "column",
                        gap: "10px"
                    }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Box sx={{
                            fontSize: "30px",
                            fontWeight: "800",
                            color: theme.palette.plainDark.main,
                        }} className="" >
                            <Link to={"/"} >
                                Tech Tribe
                            </Link>
                        </Box>
                        <IconButton onClick={toggle} sx={{ display: { md: "none", xs: "flex" } }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Stack direction={"column"} sx={{
                        display: "grid",
                        alignItems: "center",
                        gap: "10px",
                        width: "100%"
                    }}>
                        {users.map(user => (
                            <Box key={user.id} sx={{
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
                                    {user.name}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default Sidebar