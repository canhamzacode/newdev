import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import paintBoard from "../assets/image/paintBoard.svg"
import paintBoardBack from "../assets/image/paintBoardBack.svg"
import hardDisk from "../assets/image/hardDisk.svg"
import StackCard from './StackCard'

const Frontend = () => {
    const description = "When you visit a website, the frontend code is what determines what you see on the screen and how you can interact with it. Everything you see on this web page is our frontend; the buttons, texts, colors, links, navigation and design arrangement.";
    const stack = "Frontend";
    const img = paintBoard;
    return (
        <StackCard stack={stack} content={description} img={img} linkTo={stack} />
    )
}
const Backend = () => {
    const description = " You can't see the backend but without it, you won't be able to start learning any technologies on NewDev or even have an account. It's where all the behind-the-scene activities that enable our website to function properly happens.";
    const stack = "Backend";
    const img = paintBoardBack;
    return (
        <StackCard stack={stack} content={description} img={img} linkTo={stack} />
    )
}
const VSC = () => {
    const description = " Our Version Control Guide will show you everything you need to know about version control.";
    const stack = "Version Control";
    const img = hardDisk;
    return (
        <StackCard stack={stack} content={description} img={img} linkTo={""} />
    )
}

export { Frontend, Backend, VSC };