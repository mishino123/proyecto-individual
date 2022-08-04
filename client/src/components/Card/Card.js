import React from "react";
import {Link} from "react-router-dom";
import styles from "./Card.module.css"; 
function Card(props){
const id=props.id
const name=props.name
// console.log(props)
    return(
        <div className={styles.card}>
            
            <h2>{props.name}</h2>
            <div className={styles.cat}>
            <Link to={`/pokemons/${name}`}>
            <img className={styles.img} src={props.image} alt={props.name}/>
            </Link>
            </div>
            <div>
            <div><h5 className={styles.text}>weight: {props.weight}</h5></div>
            <h5 className={styles.text}>attack:{props.attack}</h5>
            <h5 className={styles.text}>type: {props.type.toString()}</h5>
            </div>
        </div>
    )

}

export default Card
