import { Box, Card } from '@mui/material'
import React from 'react'
import SendMessage from '../components/SendMessage'

const Message = () => {
    return (
        <Box className="my-10 h-[full] relative w-full">
            <Box sx={{ padding: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <Card sx={{
                    background: "#fff", width: "70%", float: "right", padding: "15px", maxWidth: "400px", flexWrap: "wrap", justifyContent: "right", alignSelf: "flex-end",
                }}>
                    Heello I Love You
                </Card>
                <Card sx={{
                    background: "#fff", width: "70%", float: "right", padding: "15px", maxWidth: "400px", flexWrap: "wrap", justifyContent: "right", alignSelf: "flex-start",
                }}>
                    Heello I Love You
                </Card>
                <Card sx={{
                    background: "#fff", width: "70%", float: "right", padding: "15px", maxWidth: "400px", flexWrap: "wrap", justifyContent: "right", alignSelf: "flex-end",
                }}>
                    Heello I Love You
                </Card>
                <Card sx={{
                    background: "#fff", width: "70%", float: "right", padding: "15px", maxWidth: "400px", flexWrap: "wrap", justifyContent: "right", alignSelf: "flex-start",
                }}>
                    Heello I Love You
                </Card>
            </Box>
            {/* <SendMessage /> */}
        </Box>
    )
}

export default Message