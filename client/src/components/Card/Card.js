import React from "react";
import {Link} from "react-router-dom"
function Card(props){
const id=props.id
console.log(props)
    return(
        <div>
            
            <h1>{props.name}</h1>
            <Link to={`/pokemons/${id}`}>
            <img src={props.image} alt={props.name}/>
            </Link>
            <h3>weight:{props.weight}</h3>
            <p>type: {props.type.toString()}</p>
        </div>
    )

}

export default Card
