import React, { useEffect, useState, useMemo } from 'react';
import { Box, Stack } from '@mui/material';
import Blog from '../components/Blog';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const [articles, setArticles] = useState(null);
    const navigate = useNavigate();
    const handleNavigate = (id) => {
        navigate(`/story/${id}`);
    };
    const getAllArticles = async () => {
        try {
            const articlesCollection = collection(db, 'articles');
            const articlesSnapshot = await getDocs(articlesCollection);

            const articles = [];
            articlesSnapshot.forEach((doc) => {
                const articleData = { id: doc.id, ...doc.data() };
                articles.push(articleData);
            });

            // Sort the articles based on your requirements
            const sortedArticles = articles.sort(/* Sorting logic */);

            setArticles(sortedArticles);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    useEffect(() => {
        getAllArticles();
    }, []);

    const memoizedArticles = useMemo(() => articles, [articles]);

    return (
        <Box className="pt-14" sx={{ width: "100%" }}>
            <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", width: "100%", gap: "20px" }}
            >
                {memoizedArticles &&
                    memoizedArticles.map((article) => (
                        <Blog key={article.id} article={article} />
                    ))}
            </Stack>
        </Box>
    );
};

export default Blogs;