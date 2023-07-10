import { Box, Stack } from '@mui/material'
import React from 'react'
import Blog from '../components/Blog';

const Blogs = () => {
    return (
        <Box className="pt-14" width={"100%"}>
            <Stack direction={'row'}
                sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", width: "100%", gap: "20px" }}
            >
                <Blog />
                <Blog />
                <Blog />
                <Blog />
            </Stack>
        </Box>
    )
}

export default Blogs