import React from "react"
import {getDetailsPokemon} from "../Actions/Actions";
import {ReactReduxContext, useDispatch} from "react-redux";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {Route,useParams} from "react-router-dom"
function Details(props){
    const id=props.match.params.id;
 let dispatch=useDispatch();
useEffect(()=>{dispatch(getDetailsPokemon(id))},[])
let detail=useSelector(store=>store.pokemondetails)


   return(
    <div key={detail.id}>
        <h1>Details pokemon</h1>
        <p>name: {detail.name}</p>
        <img src={detail.image} alt={detail.name}/>
        <p>weight: {detail.weight}</p>
        <p>height: {detail.height}</p>
        {detail.stats?.map((detalle)=>{
    let list=(
        <>
       <ul>
        <li>{detalle.name}={detalle.base}</li>
       </ul>
       </>
    );
    return list
   })}
     
    </div>
   )

}

export default Details