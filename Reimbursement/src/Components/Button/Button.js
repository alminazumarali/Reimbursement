import React from 'react'
import './Button.scss'

function Button({buttonContent,handleFunc}) {
    const handleClick=()=>{
        handleFunc()
    }
    return (
        <div>
            <button className='Button1' onClick={handleClick}>{buttonContent}</button>
        </div>
    )
}

export default Button