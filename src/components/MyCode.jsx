import React from 'react'

const MyHtml = ({ html, handleHtml }) => {
    return (
        <textarea className='textarea' cols="30" rows="10" value={html} onChange={handleHtml}></textarea>
    )
}
const MyCss = ({ css, handleCss }) => {
    return (
        <textarea className='textarea' cols="30" rows="10" value={css} onChange={handleCss}></textarea>
    )
}
const MyJs = ({ js, handleJs }) => {
    return (
        <textarea className='textarea' cols="30" rows="10" value={js} onChange={handleJs}></textarea>
    )
}

export { MyHtml, MyCss, MyJs }