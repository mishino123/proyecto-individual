
import {GET_API_POKEMON,GET_DETAILS_POKEMON,ORDER_BY_NAME} from "../components/Actions/Typesactions";
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
            case ORDER_BY_NAME:
                  let sorArray=action.payload==="asc"?
                  state.pokemons.sort((a,b)=>{
                        if(a.name>b.name){
                              return 1;
                        }if(a.name<b.name){
                              return -1;
                        }
                            return 0;
                  }): state.pokemons.sort((a,b)=>{
                        if(a.name>b.name){
                              return -1;
                        }if(a.name<b.name){
                              return 1;
                        }
                            return 0;
                  })
                  return {
                        ...state, pokemons:sorArray
                  }

            default: return{...state}
      }
      
      }


export default rootReducer;