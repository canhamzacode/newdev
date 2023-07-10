import { Box, Stack, TextField, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { MyHtml, MyCss, MyJs } from "../components/MyCode"
import RefreshIcon from '@mui/icons-material/Refresh';

const PlayGround = () => {
    const [html, setHtml] = useState(`<button
    class="btn"
    onclick="handleClick()"
  >
    Click me!
  </button>`);
    const [css, setCss] = useState(`.btn {
        background-image: linear-gradient(to right, #C04848 0%, #480048  51%, #C04848  100%);
        color: white;
        cursor: pointer;
        margin: 10px;
        padding: 15px 45px;
        text-transform: uppercase;
        transition: 0.5s;
        background-size: 200% auto;
        border: unset;
        border-radius: 10px;
      }
      
      .btn:hover {
        background-position: right center;
        color: #fff;
        text-decoration: none;
      }
      `);
    const [js, setJs] = useState(`function handleClick() {
        const button = document.querySelector('.btn')
      
        if (button.innerHTML.includes('Click me!')) {
          button.innerHTML = 'You clicked me! 🔥'
        } else {
          button.innerHTML = 'Click me!'
        }
      }
      `);
    const [activeTextarea, setActiveTextarea] = useState("html");

    const handleHtml = (e) => {
        setHtml(e.target.value);
    };

    const handleCss = (e) => {
        setCss(e.target.value);
    };

    const handleJs = (e) => {
        setJs(e.target.value);
    };

    const toggleTextarea = (textarea) => {
        setActiveTextarea(textarea);
    };

    const refresh = (textarea) => {
        setHtml(`<button
        class="btn"
        onclick="handleClick()"
      >
        Click me!
      </button>`);
        setCss(`.btn {
        background-image: linear-gradient(to right, #C04848 0%, #480048  51%, #C04848  100%);
        color: white;
        cursor: pointer;
        margin: 10px;
        padding: 15px 45px;
        text-transform: uppercase;
        transition: 0.5s;
        background-size: 200% auto;
        border: unset;
        border-radius: 10px;
      }
      
      .btn:hover {
        background-position: right center;
        color: #fff;
        text-decoration: none;
      }
      `);
        setJs(`function handleClick() {
        const button = document.querySelector('.btn')
      
        if (button.innerHTML.includes('Click me!')) {
          button.innerHTML = 'You clicked me! 🔥'
        } else {
          button.innerHTML = 'Click me!'
        }
      }
      `)
    };

    return (
        <Box className="my-10">
            <br />
            <Stack sx={{ background: "black", padding: "10px", borderRadius: "10px", gap: "10px 0", margin: "35px 0" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant='p' sx={{ color: "wheat" }}>
                        Code Playground
                    </Typography>
                    <Button onClick={refresh}>
                        <RefreshIcon sx={{ color: "white" }} />
                    </Button>
                </Box>
                <Box>
                    <Button
                        sx={{ color: "white" }}
                        variant={activeTextarea === "html" ? "contained" : "outlined"}
                        onClick={() => toggleTextarea("html")}
                    >
                        HTML
                    </Button>
                    <Button
                        sx={{ color: "white" }}
                        variant={activeTextarea === "css" ? "contained" : "outlined"}
                        onClick={() => toggleTextarea("css")}
                    >
                        CSS
                    </Button>
                    <Button
                        sx={{ color: "white" }}
                        variant={activeTextarea === "js" ? "contained" : "outlined"}
                        onClick={() => toggleTextarea("js")}
                    >
                        JavaScript
                    </Button>
                </Box>
                {activeTextarea === "html" && (
                    <MyHtml html={html} handleHtml={handleHtml} />
                )}
                {activeTextarea === "css" && (
                    <MyCss css={css} handleCss={handleCss} />
                )}
                {activeTextarea === "js" && (
                    <MyJs js={js} handleJs={handleJs} />
                )}
                <iframe className='bg-white'
                    srcDoc={`<html><head><style>${css}</style></head><body>${html}<script>${js}</script></body></html>`}
                    title="Result"
                    sandbox="allow-scripts"
                ></iframe>
            </Stack>
            <br />
        </Box>
    )
}

export default PlayGround
