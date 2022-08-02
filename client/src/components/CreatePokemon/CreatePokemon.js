import React, { useEffect } from "react";
import {useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getTypesPokemon,postPokemon } from "../Actions/Actions";
import { Link } from "react-router-dom";
import styles from "./createPokemon.module.css"
function CreatePokemon(){

    const dispatch=useDispatch()
    const types=useSelector(state=>state.types)

    const [input,SetInput]=useState({
        name:"",
        image:"",
        height:"",
        weight:"",
        hp:0,
        attack:0,
        defense:0,
        special_attack:0,
        special_defense: 0,
        speed:0,
        typespoke:[]
    })
   useEffect(()=>{dispatch(getTypesPokemon())},[]);
     function HandleChange(e){
    SetInput({...input,[e.target.name]:e.target.value})
   

}
function HandleCheckBok(e){
   
    if(e.target.checked){
     SetInput( {...input,typespoke: [...input.typespoke, e.target.name] })
    }
}

function sendPokemon(e){
    e.preventDefault();
   console.log(input)
   dispatch(postPokemon(input))
   SetInput({  name:"",
   image:"",
   height:"",
   weight:"",
   hp:0,
   attack:0,
   defense:0,
   special_attack:0,
   special_defense: 0,
   speed:0,
   typespoke:[]
})
  
}  


   return(
<div className={styles.containerprincipal}>
     <Link to="/pokemons"><botton>volver</botton></Link>
     <h1>Create Pokemon</h1>
     <div className={styles.container}>
    <form onSubmit={(e)=>sendPokemon(e)}>
        <div className={styles.container2}>
        <div className={styles.data}>
            <label className={styles.label}>Name:</label>
            <input className={styles.primero} type="text" name="name" value={input.name} onChange={HandleChange}></input>
        </div>
        <div className={styles.data}>
            <label className={styles.label}>Weight:</label>
            <input className={styles.primero} type="text" name="weight" value={input.weight} onChange={HandleChange}></input>
        </div>
        
        <div className={styles.data}>
            <label className={styles.label}>Height: </label>
            <input className={styles.primero} type="text" name="height" value={input.height} onChange={HandleChange}></input>
        </div>
        <div className={styles.data}>
            <label className={styles.label}>image: </label>
            <input  className={styles.primero} type="text" name="image" value={input.image} onChange={HandleChange}></input>
        </div>
        <div className={styles.data}>
            <label className={styles.label}>hp: </label>
            <input className={styles.primero} type="number" name="hp" value={input.hp} max="100" min="0" onChange={HandleChange}></input>
        </div>
        <div className={styles.data}>
            <label className={styles.label}>attack: </label>
            <input className={styles.primero} type="number" name="attack" value={input.attack} max="100" min="0" onChange={HandleChange}></input>
        </div>
        <div className={styles.data}>
            <label className={styles.label}>defense: </label>
            <input  className={styles.primero} type="number" name="defense" value={input.defense} max="100" min="0" onChange={HandleChange}></input>
        </div>
        <div className={styles.data}>
            <label className={styles.label}> special attack: </label>
            <input  className={styles.primero} type="number" name="special_attack" value={input.special_attack} min="0" max="100" onChange={HandleChange}></input>
        </div>
        <div className={styles.data}>
            <label className={styles.label}>  special defense: </label>
            <input  className={styles.primero} type="number" name="special_defense" value={input. special_defense}  min="0" max="100" onChange={HandleChange}></input>
        </div>
        <div className={styles.data}>
            <label className={styles.label}>  speed: </label>
            <input  className={styles.primero} type="number" name="speed" value={input.speed} max="100" min="0" onChange={HandleChange}></input>
        </div>
        </div>
        

        <div className={styles.types}>
        {types.map(elemento=>(
            <div className={styles.elements}>
           <label>{elemento}</label>
           <input type="checkbox" name={elemento} onClick={(e)=>HandleCheckBok(e)}></input> 
           </div>))}
      
     </div>

     <button type="submit">Crear Pokemon</button>
      </form>

     </div>
 
</div>

   )

}

export default CreatePokemon;