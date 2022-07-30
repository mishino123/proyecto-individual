
import {GET_API_POKEMON,GET_DETAILS_POKEMON} from "../components/Actions/Typesactions";
const inicialState={
    pokemons:[],
    pokemondetails:[],
    pokemonsAll:[],
    types:[],
  
}

function rootReducer(state=inicialState,action){
      switch(action.type){
            case GET_API_POKEMON:
                  return{
                       ...state,pokemons:action.payload}

            case GET_DETAILS_POKEMON:
             return{
                   ...state,pokemondetails:action.payload}


            default: return{...state}
      }
      
      }


export default rootReducer;