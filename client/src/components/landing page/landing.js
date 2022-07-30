import React from "react";
import { Link } from "react-router-dom";
import styles from "./landing.module.css";
export default function Landingpage(){
return(
<div className={styles.fondo}>
    <h3>Pokemon Page</h3>
    <Link to="/pokemons">
    <button className={styles.buton}>Ingresa Aqui</button>
    </Link>
</div>
)}