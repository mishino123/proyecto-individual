import rootReducer from "../src/reducer/reducers";
import {GET_API_POKEMON,GET_DETAILS_POKEMON,ORDER_BY_NAME,GET_POKEMON_BY_NAME,GET_TYPES,POST_POKEMON,FILTER_CREATED,FILTER_BY_TYPE,FILTER_BY_ATACK} from "../src/components/Actions/Typesactions"
const axios = require('axios');
const getAllpokemons=async()=>{
     let  info=await axios.get("http://localhost:3001/pokemons/")
     return info.data
}
const pokemons= getAllpokemons();
console.log(pokemons)

describe('Reducer', () => {
    const state = {
        pokemons:[],
        pokemondetails:[],
        Allpokemons:[],
        types:[],
    };
 
    it('Debería retornar el estado inicial si no se pasa un type válido', () => {
        expect(rootReducer(undefined, [])).toEqual({
            pokemons:[],
            pokemondetails:[],
            Allpokemons:[],
            types:[],
        });
     });

     it('Debería guardar en nuestro state los productos obtenidos de nuestro llamado al back cuando action type es "GET_ALL_PRODUCTS"', () => {
        const result = rootReducer(state, {
           type: GET_API_POKEMON,
           payload: pokemons,
        });
        // Acuerdense que el state inicial no tiene que mutar!
        expect(result).not.toEqual(state);
        expect(result).toEqual({
            pokemons:  [pokemons], // Cuando ejecutes los tests, vas a ver bien lo que espera que le llegue a nuestro estado!
           pokemondetails:[],
           Allpokemons:[],
            types:[],
        });
     });

})  