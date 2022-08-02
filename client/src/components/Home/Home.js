
import React from "react";
import {connect} from "react-redux"
import {GetPokemon,orderByName} from "../../components/Actions/Actions";
import Cards from "../Cards/Cards";
import styles from "./home.module.css";
import {useState} from "react"
import Pagination from "../pagination/Pagination";
import { useDispatch } from "react-redux";
import SearchBar from "../searchBar/SearchBar";
function mapStateToProps(state){
  return {
    pokemones:state.pokemons
  }
}
function Home(props){
  let dispatch=useDispatch()
React.useEffect(()=>{props.GetPokemon()},[])
// console.log(props.pokemones)
const [order,setOrder]=useState("");
const [page,setPage]=useState(1)
const pokemonsPerPage=12;
const finalindex=page*pokemonsPerPage;
const indexprimercaracter=finalindex-pokemonsPerPage;
const pokemonsview=props.pokemones.slice(indexprimercaracter,finalindex)

// console.log(pokemonsview)
function pokePage(pagina){
    setPage(pagina)
}

function hadleSort(e){
  e.preventDefault();
  dispatch(orderByName(e.target.value))
  setPage(1)
  setOrder(`ordenado: ${e.target.value}`)
}

  return(
    <div className={styles.container}>
       <h2>Home</h2>
       <SearchBar/>
       <Pagination  pokemones={props.pokemones} pokemonsPerPage={pokemonsPerPage} pokePage={pokePage}/>
        <select onChange={(e=>hadleSort(e))}>
          <option value="asc">A-Z</option>
          <option value="des">Z-A</option>
        </select>
        <select name="Type">
          <option value="normal">normal</option>
          <option value="fighting">fighting</option>
          <option value="flying">flying</option>
          <option value="poison">poison</option>
        </select>
        <select name="import">
          <option value="normal">Imported</option>
          <option value="fighting">Created</option>
        </select>
     
      
        <div>
        <Cards pokemons={pokemonsview}/>
        </div>
       
    </div>
  )
}

export default connect(mapStateToProps,{GetPokemon})(Home);//
