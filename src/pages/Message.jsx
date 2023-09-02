import { Box, Button, Card, Stack, Typography } from '@mui/material'
import React from 'react'
import SendMessage from '../components/SendMessage'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';
import MenuIcon from '@mui/icons-material/Menu';
import { useToggle } from '../hooks/useToggle';
const paperAlign = {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    background: "#fff"
}

const Message = () => {
    const theme = useTheme();
    const [stateValue, toggle] = useToggle();
    return (
        <>
            <Sidebar stateValue={stateValue} toggle={toggle} />
            <Box sx={{ paddingBottom: "0", width: "100%", height: "100%", overflowY: "auto", }}>
                <Box sx={{
                    padding: "15px",
                    position: "fixed",
                    width: "100%",
                    top: '0',
                    left: '0',
                    transform: 'translateX(-50%, -50%)',
                }}>
                    <Box sx={{
                        position: "fixed",
                        width: "100%", // Adjust the maximum width as needed
                        overflow: "hidden", // Hide content that overflows
                        padding: "20px",
                        background: "#fff",
                        display: { md: "none", xs: "flex" },
                        alignItems: "center",
                        borderRadius: "8px",
                        justifyContent: "space-between",
                        left: "0",
                        top: "0",
                    }} className="z-[15]">
                        <Box className="flex gap-2">
                            <Button onClick={toggle}>
                                <MenuIcon sx={{ color: "#000", fontSize: "35px" }} />
                            </Button>
                            <Box sx={{
                                fontSize: "30px",
                                fontWeight: "800",
                                color: theme.palette.plainDark.main,
                            }} className="logo" >
                                <Link to={"/"} >
                                    Tech Tribe
                                </Link>
                            </Box>
                        </Box>
                        <Box className="flex items-center">
                            <Button>
                                <div className="profileImg">
                                    <AccountCircleIcon sx={{ width: "100%", height: "100%", background: "#000", borderRadius: "50%" }} />
                                </div>
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Stack direction={"column"} sx={{
                    display: "grid",
                    alignItems: "center",
                    gap: "10px",
                    width: "100%",
                    gridTemplateRows: { md: "70px 1fr 70px 10px", xs: "1fr 50px" },
                    height: "100%",
                    overflow: "hidden"
                }}>
                    <Box sx={{
                        padding: "10px",
                        background: "#fff",
                        display: { md: "flex", xs: "none" },
                        alignItems: "center",
                        justifyContent: "space-between",
                    }} className="z-[15]">
                        <Box sx={{ display: "flex", gap: "10px" }}>
                            <Button onClick={toggle} sx={{ display: { md: "flex", xs: "none" } }}>
                                <MenuIcon sx={{ color: "#000", fontSize: "35px" }} />
                            </Button>
                            <Box sx={{
                                fontSize: "30px",
                                fontWeight: "800",
                                color: theme.palette.plainDark.main,
                            }} className="logo" >
                                <Link to={"/"} >
                                    Tech Tribe
                                </Link>
                            </Box>
                        </Box>
                        <Box className="flex items-center">
                            <Button>
                                <div className="profileImg">
                                    <AccountCircleIcon sx={{ width: "100%", height: "100%", background: "#000", borderRadius: "50%" }} />
                                </div>
                            </Button>
                            <Typography variant='h5'>Abdullah</Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: "100%",
                        height: "100%",
                        overflow: "auto",
                        padding: "20px",
                        paddingTop: {
                            md: "10px",
                            xs: "70px"
                        },
                        display: "flex", // Change display property to "flex"
                        flexDirection: "column", // Set flexDirection to "column"
                        gap: "10px",
                        maxHeight: "100%", // Set a maxHeight
                        overflowY: "auto" // Add overflowY property
                    }}>
                        <Card sx={{
                            background: "#fff",
                            width: "70%",
                            padding: "15px",
                            maxWidth: "450px",
                            display: "flex",
                            alignItems: "start",
                            alignSelf: "flex-end",
                            justifySelf: "flex-end",
                            flexDirection: "row"
                        }}>
                            <Box>
                                Heello I Love You Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ut consequuntur autem voluptatum doloremque, esse numquam, error iure nemo ipsum, tenetur a eveniet? Voluptates dolor commodi sint pariatur itaque optio.
                            </Box>
                            <Button>
                                <div className="profileImg">
                                    <AccountCircleIcon sx={{ width: "100%", height: "100%", background: "#000", borderRadius: "50%" }} />
                                </div>
                            </Button>
                        </Card>
                        {/* Add more cards or content here */}
                    </Box>

                    <SendMessage />
                </Stack >
            </Box >
        </>
    )
}

export default Message