import React, { useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Box, Button, } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import Footer from './components/Footer'
import MyModal from './components/MyModal';
import NavModal from './components/NavModal';
import { ThemeContext } from './ThemeProvider'
import { useTheme } from '@mui/material/styles';
import { AuthContext } from './AuthProvider';
import EditProfileModal from './components/EditProfileModal';

const Layout = () => {
    const theme = useTheme();
    const { user } = useContext(AuthContext);


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [openNav, setOpenNav] = useState(false);
    const handleOpenNav = () => setOpenNav(true);
    const handleCloseNav = () => setOpenNav(false);

    return (
        <Box className="p-4" sx={{
            background: theme.palette.primary.main,
            color: theme.palette.text.main,
            minHeight: "100vh",
        }} >
            <NavBar handleOpenNav={handleOpenNav} />
            <br />
            <br />
            <Outlet />
            <br />
            <br />
            <Footer handleOpen={handleOpen} />
            <MyModal handleClose={handleClose} handleOpen={handleOpen} open={open} />
            <NavModal handleCloseNav={handleCloseNav} handleOpenNav={handleOpenNav} openNav={openNav} />

            {user && <Button onClick={handleOpen} className='addStory' sx={{ display: { xs: "none", md: "flex" } }}>
                <AddIcon sx={{ color: "#fff" }} />
            </Button>}
        </Box>
    )
}

export default Layout