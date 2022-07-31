
import { GET_API_POKEMON,GET_DETAILS_POKEMON,ORDER_BY_NAME } from "./Typesactions";


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
  export const orderByName = (payload) => {
    return { type: ORDER_BY_NAME,
             payload
    
    };
  };