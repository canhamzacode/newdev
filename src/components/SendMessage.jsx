import { Box, Button } from '@mui/material'
import React from 'react'
import { useTheme } from '@emotion/react';

const SendMessage = () => {
    const theme = useTheme();
    return (
        <Box sx={{
            width: "100%", padding: "20px",
            background: theme.palette.primary.main,
            color: theme.palette.plainDark.main,
        }}>
            <form className='w-full flex justify-between'>
                <input type="text" className='w-[90%] border-none p-2 outline-none' placeholder='Message...' />
                <Button sx={{ background: "#fff", padding: "10px", color: "#000", fontWeight: "600 " }}>
                    Send
                </Button>
            </form>
        </Box>
    )
}

export default SendMessage