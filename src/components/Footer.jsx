import { Box, Stack, Typography, makeStyles } from '@mui/material'
import React, { useContext } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ExtensionIcon from '@mui/icons-material/Extension';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { ThemeContext } from '../ThemeProvider'
import { AuthContext } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';
import ChatIcon from '@mui/icons-material/Chat';
import GamepadIcon from '@mui/icons-material/Gamepad';
import DirectionsIcon from '@mui/icons-material/Directions';


const Footer = ({ handleOpen }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const paperAlign = {
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    }

    const getAuthenticated = () => {
        navigate("/auth");
    }

    const theme = useTheme();
    return (
        <Box className="fixed bottom-0 appFooter text-center" sx={{
            width: "100%", padding: { sx: "5px" },
            background: theme.palette.primary.main,
            color: theme.palette.plainDark.main
        }} >
            <Stack
                sx={{
                    display: { xs: "grid", md: "none" },
                    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                    gap: { xs: "5px" },
                }} className="py-5" >
                <Link to="/">
                    <div style={paperAlign}>
                        <HomeIcon />
                        <Typography fontSize="10px">
                            Home
                        </Typography>
                    </div >
                </Link>
                <Link to="/community">
                    <div style={paperAlign}>
                        <PeopleIcon />
                        <Typography fontSize="10px">
                            Community
                        </Typography>
                    </div>
                </Link>
                <div style={paperAlign} onClick={user ? handleOpen : getAuthenticated}>
                    <AddBoxIcon />
                    <Typography fontSize="10px">
                        Add Story
                    </Typography>
                </div>
                <Link to="playground">
                    <div style={paperAlign}>
                        <GamepadIcon />
                        <Typography fontSize="10px">
                            Playground
                        </Typography>
                    </div>
                </Link>
                <Link to="/devguide">
                    <div style={paperAlign}>
                        <DirectionsIcon />
                        <Typography fontSize="10px">
                            Dev Guide
                        </Typography>
                    </div>
                </Link>
            </Stack>
        </Box>
    )
}

export default Footer