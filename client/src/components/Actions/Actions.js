
import { GET_API_POKEMON,GET_DETAILS_POKEMON,ORDER_BY_NAME,
  GET_POKEMON_BY_NAME,GET_TYPES,POST_POKEMON,FILTER_CREATED,FILTER_BY_TYPE} from "./Typesactions";
import axios from "axios";

export const GetPokemon = () => {
    return async function (dispatch) {
      // Aca debes hacer la petición a la ruta del back http://localhost:3001/products
      // Pueden hacer la peticion con fetch o axios (documentación de axios: https://axios-http.com/docs/example)
      // Aclaración: todas las peticiones al back son asíncronas.
      return fetch("http://localhost:3001/pokemons/").then((response)=>response.json()).then(r=>dispatch({type:GET_API_POKEMON, payload: r}))
    };
  };


  export const getDetailsPokemon = (id) => {
    return async function (dispatch) {
      // Aca debes hacer la petición a la ruta del back http://localhost:3001/products
      // Pueden hacer la peticion con fetch o axios (documentación de axios: https://axios-http.com/docs/example)
      // Aclaración: todas las peticiones al back son asíncronas.
      return fetch("http://localhost:3001/pokemons/"+id).then((response)=>response.json()).then(r=>dispatch({type:GET_DETAILS_POKEMON, payload: r}))
    };
  };

  export const getpokemonbyName=(name)=>{
    return async function(dispatch){
      try{
          var respuesta=await axios.get(`http://localhost:3001/pokemons?name=${name}`)
          return dispatch({type:GET_POKEMON_BY_NAME, payload:respuesta.data})
      }catch(error){
         console.log("pokemon no encontrado")
      }
    }
  }


  export const orderByName = (payload) => {
    return { type: ORDER_BY_NAME,
             payload
    };
  };

  export const getTypesPokemon=()=>{
    return async function(dispatch){
      try{
          var respuesta=await axios.get(`http://localhost:3001/types`)
          return dispatch({type:GET_TYPES, payload:respuesta.data})
      }catch(error){
         console.log("No se recibiio nada de la base de datos")
      }
    }
  }

  
  export const postPokemon=(payload)=>{
    console.log(payload)
    return async function (dispatch){
     let respuesta=await axios.post("http://localhost:3001/pokemons/",payload)

      return{payload:respuesta} 
  
      
    }
       
  }

  export const filterCreated=(payload)=>{
    return({
      type:FILTER_CREATED,
      payload
    })
       
}


export const filterbyType=(payload)=>{
  return({
    type:FILTER_BY_TYPE,
    payload
  })
     
}