import { Box, Button } from '@mui/material'
import React from 'react'

const SendMessage = () => {
    return (
        <Box sx={{ width: "100%", padding: "20px", background: "#1a2958", bottom: "0", position: "fixed", left: "50%", zIndex: "5", transform: "translateX(-50%)" }}>
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