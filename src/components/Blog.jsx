import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import thumbnail from "../assets/image/thumbnail.webp"
import { useTheme } from '@emotion/react';
import { ThemeContext } from '../ThemeProvider'

const Blog = () => {
    const theme = useTheme();
    return (
        <Card sx={{
            maxWidth: 345,
            background: theme.palette.primary.main,
            color: theme.palette.plainDark.main
        }}>
            <CardMedia
                sx={{ height: 200, objectFit: 'cover' }}
                image={thumbnail}
                title="green iguana"
            />
            <CardContent>
                <Link to="/" className='text-center'>
                    <Typography variant="h5">
                        How The Internet Works: An Exhaustive Guide For Absolute Beginners
                    </Typography>
                </Link>
            </CardContent>
            <CardActions sx={{
                display: "flex", alignItems: "center", justifyContent: "center",
            }}>
                <Button size="small" sx={{
                    color: theme.palette.plainDark.main
                }}>
                    11 minutes read
                </Button>
                {/* <Button size="small" sx={{
                    color: theme.palette.plainDark.main
                }}>
                    <FavoriteBorderIcon />
                </Button> */}
            </CardActions>
        </Card>
    )
}

export default Blog