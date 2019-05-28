import React from 'react'
import Rating from './Rating'
export default function Card({movie}) {
    return (
        <div className="cart">
           <a href="#">
                <img src={movie.image} className="image"/>
                <h4>{movie.title}</h4> 
                <p>{movie.description}</p>
                <div className="movie-rating"><Rating count={movie.rating}/></div>
           </a>
        </div>
    )
}
