import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Frontend, Backend, VSC } from '../components/MyStack'
import { useState } from 'react'

const DevGuide = () => {
    const [data, setData] = useState("Frontend");

    const myBtn = {
        background: "#1a2958",
        borderRadius: "20px",
        padding: "15px",
        width: { md: "100%" },

    }
    const activeBtn = {
        ...myBtn,
        border: "4px solid #ff9900",
    };
    const handleFrontendClick = () => {
        setTimeout(() => {
            setData("Frontend");
        }, 1000)

    };

    const handleBackendClick = () => {
        setTimeout(() => {
            setData("Backend");
        }, 1000)
    };

    const handleVSCClick = () => {
        setTimeout(() => {
            setData("VSC");
        }, 1000);
    };

    return (
        <Box className="">
            <Stack direction={"row"} sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "0.7fr 1fr" },
                gap: "10px",
                alignItems: "center"
            }}>
                <Box sx={{ alignContent: "center", justifyContent: "center", display: "flex", flexDirection: "column", padding: "15px", marginTop: "20px" }}>
                    <Stack
                        sx={{
                            alignContent: "center",
                            justifyContent: "center",
                            display: "flex",
                            flexDirection: { md: "column", xs: 'row' },
                            padding: "25px",
                            marginTop: "45px",
                            gap: "20px",
                            flexWrap: "wrap"
                        }}>
                        <Button className='heroBtn' sx={data === "Frontend" ? activeBtn : myBtn} onClick={handleFrontendClick}>
                            Frontend
                        </Button>
                        <Button className='heroBtn' sx={data === "Backend" ? activeBtn : myBtn} onClick={handleBackendClick}>
                            Backend
                        </Button>
                        <Button className='heroBtn' sx={data === "VSC" ? activeBtn : myBtn} onClick={handleVSCClick}>
                            VSC
                        </Button>
                    </Stack>
                </Box>
                {data == "Frontend" ? <Frontend /> : data == "Backend" ? <Backend /> : <VSC />}
            </Stack >
        </Box >
    )
}

export default DevGuide