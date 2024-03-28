import React from 'react'
import "./Cards.css"

const Cards = (props) => {
    return (
        <div className='card'>
            <img src="myownreact/src/IMG_20230501_222218_304.webp" />
            <div className='para'>
                <h1>props.title</h1>
                <p>props.description</p>
            </div>
        </div>
    )
}

export default Cards
