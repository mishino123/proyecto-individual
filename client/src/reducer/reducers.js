
import {GET_API_POKEMON,GET_DETAILS_POKEMON,ORDER_BY_NAME,GET_POKEMON_BY_NAME,GET_TYPES,POST_POKEMON,FILTER_CREATED,FILTER_BY_TYPE} from "../components/Actions/Typesactions";
const inicialState={
    pokemons:[],
    pokemondetails:[],
    Allpokemons:[],
    types:[],
  
}

function rootReducer(state=inicialState,action){
      switch(action.type){
            case GET_API_POKEMON:
                  return{
                       ...state,pokemons:action.payload,
                        Allpokemons:action.payload
                  }

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
            case GET_POKEMON_BY_NAME:
                  return{
                        ...state,pokemons:action.payload
                  }
            case POST_POKEMON:
                       
                  return{
                              ...state
                        }

            case GET_TYPES:
                       
                        return{
                              ...state,  types:action.payload
                        }
                 
         case FILTER_CREATED:
                       
                       const pokemones=state.Allpokemons;
                       const filter=action.payload ==="created"? pokemones.filter(e=>e.CreateinDb): pokemones.filter(e=>!e.CreateinDb)
                              return{
                                    ...state,  pokemons:action.payload==="All"? state.Allpokemons:filter,
                              }
            case FILTER_BY_TYPE:
                       
                        const alltype=state.Allpokemons;
                        const filtertype=alltype.filter(e=>e.type.includes(action.payload))
                        return{
                              ...state,  pokemons:action.payload==="All"? state.Allpokemons:filtertype,
                               }           
                        


                              
            default: return{...state}


      }
      
      }


export default rootReducer;