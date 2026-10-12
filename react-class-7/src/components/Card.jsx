import React from 'react'

const Card = (props) => {
    return (
        <div >
            <h1>{props.elem.text}</h1>
            <h2>{props.elem.Email}</h2>
            <img src={props.elem.ImageUrl} width="200" />
            <p>{props.elem.desc}</p>

            <button onClick={() => { props.deleteHandler(props.idx) }}>Delete</button>
        </div>
    )
}

export default Card