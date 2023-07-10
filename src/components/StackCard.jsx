import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '@emotion/react';
import { ThemeContext } from '../ThemeProvider'

const StackCard = ({ stack, content, img, linkTo }) => {
    const theme = useTheme();
    return (
        <Box sx={{
            marginY: "30px",
            width: "100%",
            padding: { md: "30px", xs: "10px" },
            display: "gird",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "25px"
        }}>
            <img src={img} alt="img" className='w-full  md:w-3/5' />
            <Typography variant='p' className='mb-3' sx={{ fontSize: "20px", textAlign: "center", color: theme.palette.plainDark.main, }}>
                {content}
            </Typography>
            {linkTo && <Link className='w-full'>
                <Button className='heroBtn' sx={{ width: "100%" }}>
                    {stack}
                </Button>
            </Link>}
        </Box>
    )
}

export default StackCard