import React from "react";
import {useState} from "react";
import { useDispatch } from "react-redux";
import {getpokemonbyName} from "../Actions/Actions"
import { Link } from "react-router-dom";

function SearchBar(){
 const dispatch=useDispatch();
   const [searchpokemon, setSearchPokemon]=useState("nuevo");

function handleInputChange(e){
    e.preventDefault();
    setSearchPokemon(e.target.value);
    console.log(searchpokemon)
}
function handleSummit(e){
    e.preventDefault()
    dispatch(getpokemonbyName(searchpokemon))
}

return(
    <div>
        <input type="text" placeholder="Search by Name" onChange={handleInputChange}/>
        <button type="submit" onClick={handleSummit}>Click here</button>
        <Link to="/createpokemon">
        <button >Create Pokemon</button>
        </Link>
     
    </div>
)

}
export default SearchBar