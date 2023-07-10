import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Blog from '../components/Blog'
import ProfileCard from '../components/ProfileCard'
import { Link } from 'react-router-dom'
const Privacy = () => {
    return (
        <Box className="pt-14" width="100%">
            <Stack direction={'row'}
                sx={{ display: "flex", width: "100%", justifyContent: "space-between", padding: "20px", alignItems: "start" }}
            >
                <Box sx={{ padding: "35px", width: "35%", display: { md: "flex", xs: "none" }, flexDirection: "column", gap: "10px" }}>
                    <ProfileCard />
                    <Typography variant='h5'>
                        Table Of Contents
                    </Typography>
                    <Stack sx={{ display: "grid", gap: "10px" }}>
                        <Box sx={{ background: "grey" }}>
                            <Link to="">
                                <Typography variant='h6'>- Introduction</Typography>
                            </Link>
                        </Box>
                        <Box sx={{ background: "grey" }}>
                            <Link to="">
                                <Typography variant='h6'>- Introduction</Typography>
                            </Link>
                        </Box>
                        <Box sx={{ background: "grey" }}>
                            <Link to="">
                                <Typography variant='h6'>- Introduction</Typography>
                            </Link>
                        </Box>
                    </Stack>
                </Box>
                <Box sx={{ width: { xs: "100%", md: "60%" } }}>
                    <Typography variant='h3'>
                        IP Addresses - The Street Addresses of the Internet
                    </Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim omnis dolorem atque maiores, accusamus eum sunt illo laudantium impedit quibusdam accusantium tempore sapiente et quae minus non corrupti, commodi ullam.
                    Veniam distinctio sequi natus eveniet libero accusantium voluptatibus quis, illum nisi esse possimus voluptates vitae dignissimos enim repudiandae rem temporibus a repellat! Saepe ullam nisi quidem dolores corporis quisquam ipsa.
                    Nisi, enim quod quidem reiciendis accusamus, deserunt vero obcaecati aspernatur commodi error animi! Numquam ut eius odio vel porro assumenda quae inventore odit obcaecati sequi mollitia quidem quia, aliquam natus.
                    Animi repudiandae ipsum hic doloremque est, facilis excepturi fugiat nostrum dolores soluta incidunt ipsa mollitia repellat cumque! Harum, et? Sapiente facere ratione dolorem placeat deserunt aliquam dignissimos similique harum inventore.
                    Ipsam distinctio quaerat quia omnis, non nobis ad aperiam totam sequi, sunt molestias recusandae quam voluptatem aliquam explicabo voluptates quidem eius saepe exercitationem quis asperiores placeat? Nihil aut in illum.
                    Animi repudiandae ipsum hic doloremque est, facilis excepturi fugiat nostrum dolores soluta incidunt ipsa mollitia repellat cumque! Harum, et? Sapiente facere ratione dolorem placeat deserunt aliquam dignissimos similique harum inventore.
                    Ipsam distinctio quaerat quia omnis, non nobis ad aperiam totam sequi, sunt molestias recusandae quam voluptatem aliquam explicabo voluptates quidem eius saepe exercitationem quis asperiores placeat? Nihil aut in illum.
                    Animscabo voluptates quidem eius saepe exercitationem quis asperiores placeat? Nihil aut in illum.
                    Perspiciatis delectus est excepturi illum esse animi corrupti sapiente placeat, itaque maiores saepe ad id voluptates ratione facere assumenda dolores quo, nihil hic distinctio nam expedita sit. Labore, quasi cum.
                    Nostrum repudiandae molestiae exercitationem, pariatur saepe praesentium labore at vel, maiores ea minima quidem, id adipisci veritatis tempore esse ab eaque nihil. Rem tempora quod numquam magnam vitae temporibus blanditiis.
                </Box>
            </Stack>
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

export default Privacy