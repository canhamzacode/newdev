import React, { useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { Box, Button, } from '@mui/material'
import NavModal from '../components/NavModal';
import { useTheme } from '@mui/material/styles';
import { AuthContext } from '../AuthProvider';
import { useToggle } from '../hooks/useToggle';
import SendMessage from '../components/SendMessage';

const MessageLayout = () => {
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
            <SendMessage />
            <NavModal openNav={openNav} toggle={toggle} />
        </Box>
    )
}

export default MessageLayout