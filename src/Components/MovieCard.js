import React from 'react'

const MovieCard = (props) =>{
    return(
        <>
        <p>{props.name}</p>
<img src={props.imageUrl}/>
<p>{props.desc}</p>
        </>
    )
}


export default  MovieCard