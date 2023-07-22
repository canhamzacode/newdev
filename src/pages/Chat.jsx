import React, { useState } from 'react';
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Chat = () => {
    const [newQuestion, setNewQuestion] = useState('');
    const [storedValues, setStoredValues] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const generateResponse = async () => {
        try {
            const apiKey = "api"; // Replace with your actual API key
            const endpoint = 'https://api.openai.com/v1/engines/davinci/completions';
            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            };

            const requestBody = JSON.stringify({
                prompt: newQuestion,
                max_tokens: 100,
                temperature: 0.7,
            });

            setIsLoading(true);
            const response = await fetch(endpoint, {
                method: 'POST',
                headers,
                body: requestBody,
            });

            setIsLoading(false);
            const responseData = await response.json();

            if (responseData.choices && responseData.choices[0].text) {
                const newAnswer = responseData.choices[0].text;
                setStoredValues([
                    {
                        question: newQuestion,
                        answer: newAnswer,
                    },
                    ...storedValues,
                ]);
                setNewQuestion('');
            }
        } catch (error) {
            console.error('Error generating response:', error);
            setIsLoading(false);
            // Handle error
        }
    };

    return (
        <Box className="my-10">
            <Stack direction={"column"} sx={{ width: "100%", gap: "15px" }}>
                <Box sx={{ width: "100%", textAlign: "center", maxWidth: "500px", margin: "auto" }}>
                    <Typography variant='h4' sx={{ fontSize: { md: "30px", xs: "25px" }, display: "flex", gap: "10px", alignItems: "center", justifyContent: "center" }}>
                        Bot At Your Service
                        <span>
                            <SmartToyIcon />
                        </span>
                    </Typography>
                    <Typography variant='p'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ipsum voluptatem dicta nobis velit eligendi optio quas illo tempore necessitatibus consequuntur iure, assumenda in id. Eligendi dolore quos facilis tenetur!
                    </Typography>
                </Box>
                <Box sx={{ width: "100%", maxWidth: "500px", margin: "auto", }}>
                    <form className='w-full' >
                        <Stack sx={{ gap: '10px' }}>
                            <textarea id="" placeholder='Ask me anything...'
                                value={newQuestion}
                                onChange={(e) => setNewQuestion(e.target.value)}
                                className='p-2'></textarea>
                            <button
                                style={{ marginTop: '5px', background: 'grey', padding: '10px 0', borderRadius: '8px' }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    generateResponse();
                                }}
                                disabled={isLoading} // Disable the button when loading
                            >
                                {isLoading ? <CircularProgress size={20} color="primary" /> : 'Generate Response 🤖'}
                            </button>
                        </Stack>
                    </form>
                </Box>
                <hr />
                {storedValues.map((value, index) => (
                    <Box key={index} sx={{ width: "100%", background: "grey", padding: "10px", borderRadius: "8px", maxWidth: "500px", marginX: "auto" }}>
                        <Box sx={{ width: "100%" }}>
                            <Typography variant='p'>{value.question}</Typography>
                            <Typography variant='p'>{value.answer}</Typography>
                        </Box>
                        <Box sx={{ position: "relative", width: "100%" }}>
                            <Button sx={{ position: "absolute", right: "0", top: "-23px" }}>
                                <ContentCopyIcon sx={{ color: "black" }} />
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

export default Chat;
