import React from 'react'

//This is landing page component. 
//This component tells user about the company
//It has 2 props - text and image source
const Landing = (props) => (

    <header>
        <div class="hero">
            <img src={props.image} alt=""/>
        </div>
        <div class="title">
            <h2>{props.text}</h2>
        </div>
    </header>    
)

export default Landing