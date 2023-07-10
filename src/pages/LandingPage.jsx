import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import ladyWithLaptop2 from "../assets/image/ladyWithLaptop2.webp"
import Blogs from './Blogs'
import Stories from '../components/Stories'
import { ThemeContext } from '../ThemeProvider'
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom'

const LandingPage = () => {
    const theme = useTheme();
    return (
        <Box className="my-9">
            <Stack sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                gap: "25px"
            }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
                    <img src={ladyWithLaptop2} alt="image" className="ladyWithImg" />
                    {/* <Button className="heroBtn">
                        Find Resources Here
                    </Button> */}
                    <Link to={"/playground"}>
                        <Button className="heroBtn">
                            Playground
                        </Button>
                    </Link>
                </Box>
                <Box sx={{
                    paddingRight: { xs: "0", md: "15px" },
                    paddingTop: { xs: "70px", md: "0" }
                }}>
                    <Typography variant='h2' sx={{
                        color: theme.palette.plainDark.main
                    }}>
                        NewDev
                    </Typography>
                    <Typography variant='p' sx={{
                        fontSize: "25px",
                        color: theme.palette.plainDark.main,
                    }}>
                        Your one-stop platform for learning how to code and connecting with the best minds.
                    </Typography> <br />
                    <Link to="devguide">
                        <Button className="heroBtn">
                            Get Started Here
                        </Button>
                    </Link>
                </Box>
            </Stack>
            <Stack direction={"row"} sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: "10px",
                alignItems: "start"
            }}>
                <Box sx={{ alignContent: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}>
                    <Blogs />
                    <Button className="heroBtn" sx={{
                        width: { xs: "80%", sm: "40%" },
                        marginX: "auto"
                    }}>
                        See More Articles
                    </Button>
                </Box>
                <Box sx={{ width: "100%", display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <Typography variant='h4' sx={{
                        textAlign: "left",
                        color: theme.palette.plainDark.main,
                    }}>
                        Featured
                    </Typography> <br />
                    <Stories />
                </Box>
            </Stack>
        </Box>
    )
}

export default LandingPage