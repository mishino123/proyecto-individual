
import React from "react";
import {connect} from "react-redux"
import {GetPokemon,orderByName,filterCreated,filterbyType,orderByattack } from "../../components/Actions/Actions";
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


function hadleSortAttack(e){
  e.preventDefault();
  dispatch(orderByattack (e.target.value))//
  setPage(1)
  setOrder(`ordenado: ${e.target.value}`)//
}

function hadleOrderCreate(e){
  e.preventDefault();
  dispatch(filterCreated(e.target.value))

}

function hadleFilterType(e){
  e.preventDefault();
  dispatch(filterbyType(e.target.value))

}

function hadleRefresh(e){
  e.preventDefault();
  dispatch(GetPokemon())

}
  return(
    <div className={styles.container}>
      <div class Name={styles.home}>
       <h2>Home</h2>
       <button onClick={hadleRefresh} >Refresh</button>
       </div>
       <SearchBar/>
       <Pagination  pokemones={props.pokemones} pokemonsPerPage={pokemonsPerPage} pokePage={pokePage}/>
        <select onChange={(e=>hadleSort(e))}>
          <option value="asc">A-Z</option>
          <option value="des">Z-A</option>
        </select>

        <select onChange={(e=>hadleSortAttack(e))}>
          <option value="asc"> minor attack</option>
          <option value="des"> biggest attack</option>
        </select>
        <select onChange={(e=>hadleFilterType(e))}>
           <option value="All">all</option>
          <option value="normal">normal</option>
          <option value="fighting">fighting</option>
          <option value="poison">poison</option>
          <option value="ground">ground</option>
          <option value="flying">flying</option>
          <option value="rock">rock</option>
          <option value="ghost">ghost</option>
          <option value="steel">steel</option>
          <option value="fire">fire</option>
          <option value="water">water</option>
          <option value="grass">grass</option>
          <option value="bug">bug</option>
          <option value="electric">electric</option>
          <option value="ice">ice</option>
          <option value="dragon">dragon</option>
          <option value="dark">dark</option>
          <option value="fairy">fairy</option>
          <option value="unknown">unknown</option>
          <option value="shadow">shadow</option>
        </select>
        <select onChange={(e=>hadleOrderCreate(e))}>
             <option value="All">all</option>
             <option value="api">api</option>
             <option value="created">Created</option>
        </select>
     
      
        <div>
        <Cards pokemons={pokemonsview}/>
        </div>
       
    </div>
  )
}

export default connect(mapStateToProps,{GetPokemon})(Home);//
