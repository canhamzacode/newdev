import React, { useContext } from 'react'
import { Button, Paper, Stack, Avatar, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { useTheme } from '@emotion/react';
import { ThemeContext } from '../ThemeProvider'
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth"
import { AuthContext } from '../AuthProvider';

const NavBar = ({ openNav, toggle }) => {
    const theme = useTheme();
    const { user } = useContext(AuthContext);
    return (
        <Stack
            direction={"row"}
            sx={{
                justifyContent: "space-between",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
                background: theme.palette.primary.main,
            }}
            className='mb-4 fixed top appNav'>
            <Box sx={{
                fontSize: "35px",
                fontWeight: "800",
                color: theme.palette.plainDark.main,
            }} className="logo" >
                <Link to={"/"} >
                    Tech Tribe
                </Link>
            </Box>
            <Box sx={{
                fontSize: "45px",
                fontWeight: "800",
                color: theme.palette.plainDark.main,
            }} className="logo2" >
                <Link to={"/"} >
                    TT
                </Link>
            </Box>
            <Stack direction={"row"} gap={2} alignItems={"center"} sx={{
            }}>
                <Stack direction={"row"} gap={{ md: 2, xs: 4 }} alignItems={"center"} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "space-between", }}>
                    <Paper className='navBtn'>
                        <CloudDownloadIcon />
                    </Paper>
                    <Link to={"/community"}>
                        <Button className='navBtn'
                            sx={{
                                borderRadius: "20px",
                                padding: "10px 20px",
                                background: theme.palette.golden.main,
                                color: theme.palette.plainDark.main,
                                fontWeight: "600"
                            }} >
                            Community
                        </Button>
                    </Link>
                </Stack>


                <Link to={"/resources"}>
                    <Button sx={{
                        borderRadius: "20px",
                        padding: "10px 20px",
                        background: theme.palette.purple.main,
                        color: theme.palette.plainLight.main,
                        fontWeight: "600"
                    }} >
                        Learn To Code
                    </Button>
                </Link>
                {!user && <Link to={"/auth"}>
                    <Button className='navBtn'
                        sx={{
                            borderRadius: "20px",
                            padding: "10px 20px",
                            background: theme.palette.plainLight.main,
                            color: theme.palette.plainDark.main,
                            fontWeight: "600"
                        }}
                    >
                        Sign In
                    </Button>
                </Link>}
                {/* {user && <Avatar />} */}
                {user && <div className="profileImg" onClick={toggle}>
                    <img src={user?.profileImage || ""} alt="profile" />
                </div>}
            </Stack>

        </Stack>
    )
}

export default NavBar;