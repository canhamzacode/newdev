import React, { useContext } from 'react'
import { Avatar, Box, Button, Modal, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { ThemeContext } from '../ThemeProvider'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';


const NavModal = ({ toggle, openNav }) => {
    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();
    const theme = useTheme();
    const signUserOut = async () => {
        toggle();
        logout();
        navigate("/");
    }
    const { toggleTheme } = useContext(ThemeContext);
    const style = {
        position: 'absolute',
        top: '50px',
        right: '20px',
        maxWidth: 300,
        width: "90%",
        background: theme.palette.plainLight.main,
        // color: theme.palette.text.main,
        boxShadow: 24,
        display: "grid",
        borderRadius: "8px",
    };
    return (
        <Modal
            keepMounted
            open={openNav}
            onClose={toggle}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style} className="gap-2">
                <Stack sx={{
                    color: theme.palette.plainDark.main,

                }}>
                    <Stack direction={"row"} sx={{ width: "100%", padding: "15px 25px", gap: "20px", display: "flex", alignItems: "center" }}>
                        {/* <Avatar /> */}
                        {user && <div className="profileImg" onClick={toggle}>
                            <img src={user?.profileImage || ""} alt="profile" />
                        </div>}
                        <Box >
                            <Link to={`/${user?.username}`} onClick={toggle}>
                                <Typography variant='h6'>
                                    {user?.username}
                                </Typography>
                            </Link>
                            <Typography variant='p'>
                                {user?.title}
                            </Typography>
                        </Box>
                    </Stack>
                    <hr />
                    <Stack sx={{ width: "100%", padding: "15px 25px", display: "grid", gap: "10px" }} >
                        <Box>
                            <Link to={`/${user?.username}`} onClick={toggle}>
                                <Typography variant='p'>
                                    Public Profile
                                </Typography>
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/dashboard" onClick={toggle}>
                                <Typography variant='p'>
                                    Dashboard
                                </Typography>
                            </Link>
                        </Box>
                    </Stack>
                    <hr />
                    <Stack sx={{ width: "100%", padding: "15px 25px", display: "grid", gap: "10px" }} >
                        <Box>
                            <Link to="/playground" onClick={toggle}>
                                <Typography variant='p'>
                                    Plaground
                                </Typography>
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/devguide" onClick={toggle}>
                                <Typography variant='p'>
                                    Dev Guide
                                </Typography>
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/resources" onClick={toggle}>
                                <Typography variant='p'>
                                    Resources
                                </Typography>
                            </Link>
                        </Box>
                    </Stack>
                    <hr />
                    <Stack sx={{ width: "100%", padding: "15px 25px", display: "grid", gap: "10px" }} >
                        <Box>
                            <Link to="/membership" onClick={toggle}>
                                <Typography variant='p'>
                                    Membership
                                </Typography>
                            </Link>
                        </Box>
                    </Stack>
                    <hr />
                    <Stack sx={{ width: "100%", padding: "15px 25px", display: "grid", gap: "10px" }} >
                        <Box>
                            <Link to="/blog" onClick={toggle}>
                                <Typography variant='p'>
                                    Blog
                                </Typography>
                            </Link>
                        </Box>
                        <Box>
                            {/* <Link to="" onClick={handleCloseNav}>
                                <Typography variant='p'>
                                    Challenges
                                </Typography>
                            </Link> */}
                        </Box>
                        <Box onClick={toggleTheme} >
                            <Link onClick={toggle}>
                                <Typography variant='p' >
                                    Change Theme
                                </Typography>
                            </Link>
                        </Box>
                    </Stack>
                    <hr />
                    <Stack sx={{ width: "100%", padding: "15px 25px", display: "grid", gap: "10px" }} >
                        <Box>
                            {/* <Link to="/privacy">
                                <Typography variant='p'>
                                    Privacy Policy
                                </Typography>
                            </Link> */}
                        </Box>
                        <Box>
                            <Link onClick={signUserOut}>
                                <Typography variant='p'>
                                    Sign Out
                                </Typography>
                            </Link>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </Modal>
    )
}

export default NavModal