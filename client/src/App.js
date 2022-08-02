import './App.css';
import React from 'react';
import Home from '././components/Home/Home';
import details from "./components/Details/Index.js";
import Landingpage from './components/landing page/landing';
import CreatePokemon from './components/CreatePokemon/CreatePokemon';
import {Route} from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      
      <Route exact path="/" component={Landingpage}/>
      <Route exact path="/pokemons" component={Home}/>
      <Route exact path="/pokemons/:id" component={details}/>
      <Route exact path="/create" component={CreatePokemon}/>
    </div>
  );
}

export default App;
