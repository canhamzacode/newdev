import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog'
import ProfileCard from '../components/ProfileCard'
import { Link, useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import Blogs from './Blogs'
import ReactHtmlParser from 'react-html-parser';
import { useTheme } from '@emotion/react'

const BlogArticle = () => {
    const theme = useTheme();
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    const articleRef = collection(db, 'articles');
    const getArticleById = async (articleId) => {
        try {
            const storyDoc = await getDoc(doc(articleRef, articleId));

            if (storyDoc.exists()) {
                setArticle(storyDoc.data());
            } else {
                setArticle(null);
            }
        } catch (error) {
            console.error('Error getting story:', error);
            setArticle(null);
        }
    };

    useEffect(() => {
        getArticleById(id);
    }, []);
    return (
        <Box className="pt-14" width="100%">
            <Stack direction={'row'}
                sx={{
                    display: "flex", width: "100%", justifyContent: "space-between", padding: "20px", alignItems: "start",
                    color: theme.palette.plainDark.main,
                    overflowX: "auto"
                }}
            >
                {/* <Box sx={{ padding: "35px", width: "35%", display: { md: "flex", xs: "none" }, flexDirection: "column", gap: "10px" }}>
                    <ProfileCard />
                    <Typography variant='h5'>
                        Table Of Contents
                    </Typography>
                    <Stack sx={{ display: "grid", gap: "10px" }}>
                        <Box sx={{ background: "grey", padding: "5px 10px", borderRadius: "8px", cursor: "pointer" }}>
                            <Typography variant='h6' sx={{ color: "#fff" }}>- Introduction</Typography>
                        </Box>
                        <Box sx={{ background: "grey", padding: "5px 10px", borderRadius: "8px", cursor: "pointer" }}>
                            <Typography variant='h6' sx={{ color: "#fff" }}>- Introduction</Typography>
                        </Box>
                        <Box sx={{ background: "grey", padding: "5px 10px", borderRadius: "8px", cursor: "pointer" }}>
                            <Typography variant='h6' sx={{ color: "#fff" }}>- Introduction</Typography>
                        </Box>
                    </Stack>
                </Box> */}
                <Box sx={{ width: { xs: "100%", md: "100%" } }}>
                    <Typography variant='h5' sx={{ textAlign: "center", borderBottom: "1px solid black", borderRadius: "8px", background: theme.palette.plainDark.main, color: theme.palette.plainLight.main, }}>
                        {article?.title}
                    </Typography>
                    {/* <hr className='p-1 bg-black' /> */}
                    {/* <Typography variant='h6' sx={{ textAlign: "center" }}>
                        Summary: {article?.summary}
                    </Typography> */}
                    {ReactHtmlParser(article?.content)}
                </Box>
            </Stack>
            <Blogs />
        </Box>
    )
}

export default BlogArticle