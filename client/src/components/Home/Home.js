
import React from "react";
import {connect} from "react-redux"
import {GetPokemon} from "../../components/Actions/Actions";
import Cards from "../Cards/Cards";
function mapStateToProps(state){
  return {
    pokemones:state.pokemons
  }
}


function Home(props){
React.useEffect(()=>{
  props.GetPokemon()},[]
)
console.log(props.pokemones)
  return(
    <div>
        <h2>Home</h2>
        <Cards pokemons={props.pokemones}/>
    </div>
  )
}

export default connect(mapStateToProps,{GetPokemon})(Home);//
