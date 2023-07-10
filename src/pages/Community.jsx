import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import Blogs from './Blogs'
import Stories from '../components/Stories'

const Community = () => {
    return (
        <Box className="my-10">
            <Stack direction={"row"} sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "0.8fr 1fr" },
                gap: "10px"
            }}>
                <Box sx={{ alignContent: "center", justifyContent: "center", display: { md: "flex", xs: "none" }, flexDirection: "column" }}>
                    <Blogs />
                    <Button className="heroBtn" sx={{
                        width: { xs: "80%", sm: "40%" },
                        marginX: "auto"
                    }}>
                        See More Articles
                    </Button>
                </Box>
                <Box sx={{
                    marginTop: "30px",
                    width: "100%",
                    padding: { md: "30px" }
                }}>
                    <Typography variant='h4' className='mb-3'>
                        Featured
                    </Typography><br />
                    <Stories className="mt-4" />
                </Box>
            </Stack>
        </Box>
    )
}

export default Community