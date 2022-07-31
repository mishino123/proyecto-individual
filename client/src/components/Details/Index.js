import React from "react"
import {getDetailsPokemon} from "../Actions/Actions";
import { useDispatch} from "react-redux";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import styles from "./detail.module.css";

function Details(props){
    const id=props.match.params.id;
 let dispatch=useDispatch();
useEffect(()=>{dispatch(getDetailsPokemon(id))},[])
let detail=useSelector(store=>store.pokemondetails)


   return(
    <div key={detail.id} className={styles.body}>
            
        <div className={styles.container}>
{/***************************************** */}
             
               <div className={styles.image}>
               <h1>{detail.name}</h1> 
               <img src={detail.image} alt={detail.name}/>
                </div>

{/***************************************** */}
          <div className={styles.characteristics} >
       
        <p>weight: {detail.weight}</p>
        <p>height: {detail.height}</p> 
        <h3>stats</h3>
        <div className={styles.subcontainer}>
        {detail.stats?.map((detalle)=>{
    let list=(
        <>
       <ul>
         
        <li>{detalle.name}:  {detalle.base}</li>
       </ul>
       </>
    );
    return list
   })}

   {/********************************************* */}
   

   {/***************************************** */}
   </div>
   </div>
    </div>
    </div>
   )

}

export default Details