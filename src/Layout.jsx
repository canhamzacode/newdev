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
import { useToggle } from './hooks/useToggle';
import { useDate } from './hooks/useDate';

const Layout = () => {
    const { user } = useContext(AuthContext);
    const [openNav, toggle] = useToggle();
    const [openModal, toggleModal] = useToggle();
    const theme = useTheme();
    return (
        <Box className="p-4" sx={{
            background: theme.palette.primary.main,
            color: theme.palette.text.main,
            minHeight: "100vh",
        }} >
            <NavBar openNav={openNav} toggle={toggle} />
            <br />
            <br />
            <Outlet />
            <br />
            <br />
            <Footer handleOpen={toggleModal} />
            <MyModal toggleModal={toggleModal} openModal={openModal} />
            <NavModal openNav={openNav} toggle={toggle} />
            {user && <Button onClick={toggleModal} className='addStory' sx={{ display: { xs: "none", md: "flex" } }}>
                <AddIcon sx={{ color: "#fff" }} />
            </Button>}
        </Box>
    )
}

export default Layout