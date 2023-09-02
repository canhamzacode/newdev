import { Box, Button, Card } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MessageCard = () => {
    return (
        <Card sx={{
            background: "#fff",
            width: "70%",
            padding: "15px",
            maxWidth: "450px",
            display: "flex",
            flexDirection: "row",
            zIndex: "-1",
            marginLeft: "auto", // Move the card to the extreme right
            marginRight: "0",
            // marginLeft: "0", // Move the card to the extreme right
            // marginRight: "auto",
            marginTop: "5px",
            marginBottom: "5px"
        }}>
            <Box sx={{ background: "grey", padding: "5px", borderRadius: "5px" }}>
                Heello I Love You Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ut consequuntur autem voluptatum doloremque, esse numquam, error iure nemo ipsum, tenetur a eveniet? Voluptates dolor commodi sint pariatur itaque optio.
            </Box>
            <Button>
                <div className="profileImg">
                    <AccountCircleIcon sx={{ width: "100%", height: "100%", background: "#000", borderRadius: "50%" }} />
                </div>
            </Button>
        </Card>
    )
}

export default MessageCard