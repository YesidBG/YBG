import React, { useState } from 'react'

export default function Component() {
    
    const [text, setText] = useState()
    const [updated, setUpdated] = useState()

    const textOnchange = (event) => {
        setText(event.target.value)
    }

    const buttonOneClick = () => {
        setUpdated(text)
    }

    return (
        <div>
            <input type="text" value={text} onChange={textOnchange} />
            <button onClick={buttonOneClick}>Actualizar</button>
            <p>Texto entrada: {text} </p>
            <p>Texto Salida: {updated} </p>


        </div>
    )
}

