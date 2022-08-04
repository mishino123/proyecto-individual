import React, { useEffect } from "react";
import {useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { getTypesPokemon,postPokemon } from "../Actions/Actions";
import { Link } from "react-router-dom";
import styles from "./createPokemon.module.css"

export function validate(input){
const error={};
if(!input.name){
    error.name="*name is required*";
}else if(/\d/.test(input.name)){
    error.name="invalid, not included number";
}
return error
}


export function CreatePokemon(){

    const dispatch=useDispatch()
    const types=useSelector(state=>state.types)
    const [error, setError]=useState({});
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
    let objetovalidate=validate({...input,[e.target.name]:e.target.value})
    setError(objetovalidate)
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
    <div className={styles.header}>
    <h1>Create Pokemon</h1>
   
   
     </div>
     <div className={styles.container}>
    <form onSubmit={(e)=>sendPokemon(e)} className={styles.estructura}>
        <div className={styles.container2}>
{/************************************************************* */}
        <div className={styles.contenedorform}>
            <label >Name:</label>
            <input type="text" className={styles.imput}name="name" value={input.name} onChange={HandleChange}></input>
            {error.name && (<p className={styles.error}>{error.name}</p>)}
          
        </div>
{/************************************************************* */}
        
        <div className={styles.contenedorform}>
            <label >Weight:</label>
            <input className={styles.imput} type="text" name="weight" value={input.weight} onChange={HandleChange}></input>
        </div>
 {/************************************************************* */}       
        <div className={styles.contenedorform}>
            <label >Height: </label>
            <input className={styles.imput} type="text" name="height" value={input.height} onChange={HandleChange}></input>
        </div>

{/************************************************************* */}     
        <div className={styles.contenedorform}>
            <label >image: </label>
            <input  className={styles.imput} type="text" name="image" value={input.image} onChange={HandleChange}></input>
        </div>
{/************************************************************* */}     


        <div className={styles.contenedorform}>
            <label >hp: </label>
            <input className={styles.imput} type="number" name="hp" value={input.hp} max="100" min="0" onChange={HandleChange}></input>
        </div>

 {/************************************************************* */}    
        <div className={styles.contenedorform}>
            <label >attack: </label>
            <input className={styles.imput} type="number" name="attack" value={input.attack} max="100" min="0" onChange={HandleChange}></input>
        </div>

{/************************************************************* */} 
        <div className={styles.contenedorform}>
            <label className={styles.label}>defense: </label>
            <input  className={styles.imput} type="number" name="defense" value={input.defense} max="100" min="0" onChange={HandleChange}></input>
        </div>
{/************************************************************* */} 

        <div className={styles.contenedorform}>
            <label > special attack: </label>
            <input  className={styles.imput} type="number" name="special_attack" value={input.special_attack} min="0" max="100" onChange={HandleChange}></input>
        </div>

{/************************************************************* */} 
        <div className={styles.contenedorform}>
            <label >  special defense: </label>
            <input  className={styles.imput} type="number" name="special_defense" value={input. special_defense}  min="0" max="100" onChange={HandleChange}></input>
        </div>

{/************************************************************* */} 
        <div className={styles.contenedorform}>
            <label >  speed: </label>
            <input  className={styles.imput} type="number" name="speed" value={input.speed} max="100" min="0" onChange={HandleChange}></input>
        </div>
{/************************************************************* */} 
        </div>
        
   <div>

        <button type="submit" disabled={error.name?true:false} className={styles.button}>Crear Pokemon</button>
        <Link to="/pokemons"><button>volver</button></Link>
        <div className={styles.types}>
        {types.map(elemento=>(
            <div className={styles.elements}>
           <label>{elemento}</label>
           <input type="checkbox" name={elemento} onClick={(e)=>HandleCheckBok(e)}></input> 
           </div>))}
         
     </div>
     
     </div>
      </form>

     </div>
 
</div>

   )

}

export default CreatePokemon;