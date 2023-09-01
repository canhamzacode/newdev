import React, { useState, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Box, Button, Card, Stack, Typography, } from '@mui/material'
import NavModal from '../components/NavModal';
import { useTheme } from '@mui/material/styles';
import { AuthContext } from '../AuthProvider';
import { useToggle } from '../hooks/useToggle';
import SendMessage from '../components/SendMessage';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MessageLayout = () => {
    const { user } = useContext(AuthContext);
    const [openNav, toggle] = useToggle();
    const [openModal, toggleModal] = useToggle();
    const theme = useTheme();
    return (
        <Box className="p-4" sx={{
            background: theme.palette.primary.main,
            color: theme.palette.text.main,
            height: "100vh",
            display: "grid",
            overflowY: "hidden",
            gridTemplateColumns: "0.4fr 1fr ",
            alignItems: "start"
        }} >
            <Outlet />

        </Box>
    )
}

export default MessageLayout