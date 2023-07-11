import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import thumbnail from "../assets/image/thumbnail.webp"
import { useTheme } from '@emotion/react';
import { ThemeContext } from '../ThemeProvider'

const Blog = ({ article }) => {
    const theme = useTheme();
    return (
        <Card sx={{
            maxWidth: 345,
            width: "100%",
            background: theme.palette.primary.main,
            color: theme.palette.plainDark.main
        }}>
            <CardMedia
                sx={{ height: 200, objectFit: 'cover' }}
                image={article?.imageUrl}
                title={article?.title}
            />
            <CardContent>
                <Link to={`/blog/${article?.id}`} className='text-center'>
                    <Typography variant="h5">
                        {article?.title}
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
            </CardActions>
        </Card>
    )
}

export default Blog