const express = require('express');
const router = express.Router();
const {Pokemon,Types} =require("../db");
const axios = require('axios');
const { restart } = require('nodemon');
const limit=20;

const apipoke=async()=>{
            try{
                const respuesta=await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
                const response=respuesta.data.results
                const pokemons=[];
                    for(let i=0;i<response.length;i++){
                        const allInfo=await axios.get(`${response[i].url}`);
                        const poke=allInfo.data;
                        const type=poke.types;
                         const alltypes=[];
                    for(let j=0; j<type.length;j++){
                     const newType=type[j].type.name
                     alltypes.push(newType)
                                    }
        const pokemon={
                     id:i+1,
                     name:poke.name,
                     weight:poke.weight,
                     type:alltypes,
                    image:poke.sprites.other.dream_world.front_default,
                        }
        pokemons.push(pokemon)
       
    }
    return pokemons
   console.log(pokemons)
}catch(error){
    return console.log("no se puede leer")
}
}
// const pokes=apipoke()
// router.get('/',async(req,res)=>{
//     allPokemons=await apipoke();
//     console.log(allPokemons);
//     return res.json(allPokemons);

// })

const getDbinfo=async()=>{
      let datbase= await Pokemon.findAll({
        include:{
            model: Types,
            attributes:["name"],
            through: {
                attributes:[],
            }
        }
      })

      let response=await datbase.map(pokemon=>{
        return {
                id:pokemon.id,
                name: pokemon.name,
                weight: pokemon.weight,
                CreateinDb: pokemon.CreateinDb,
                image:pokemon.image,
                type:pokemon.Types.map(type=>type.name)
        }

      }
      )
     return response;
}

const getAllpokemons=async()=>{
       const apipokemon=await apipoke();
       const dbpokemon=await getDbinfo();
       const allpokemons=apipokemon.concat(dbpokemon);
       return allpokemons;
}


const detailspoke=async(name)=>{
    try{
        const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const detail=response.data
        const stats=detail.stats;
        const stadistics=[];
        for (let i=0;i<stats.length;i++){
            const hability={
             base:stats[i].base_stat,
             name:stats[i].stat.name
            }
            stadistics.push(hability)
        }
        const details={  
                         id:detail.id,
                         name:detail.name,
                         image:detail.sprites.other.dream_world.front_default,
                         height:detail.height,
                         weight: detail.weight,
                         stats:stadistics,
                         type:detail.types.map(e=>{return e.type.name} )
                     }
        console.log(details)
        return details
    }catch(error){
      console.log("error")
    }
}
//*****************pokemon por id****************/
router.get('/:id',async(req,res)=>{
     const {id}=req.params
   
    const detailpokemon=await detailspoke(id);
    return res.json(detailpokemon);

})

//*****************pokemon por name****************/

router.get('/',async(req,res)=>{
   const name=req.query.name;
   let getpokemons=await getAllpokemons()
   console.log(getpokemons)
   if(name){
    let searchName=await getpokemons.filter(el=>el.name.toLowerCase().includes(name))
    searchName.length?
    res.status(200).send(searchName):
    res.status(400).send("no se encontro el personaje")
   }else{
    res.status(200).send(getpokemons)
    console.log("no hay name")
   }
})
//********************post Pokemon*************************/
router.post('/',async(req,res)=>{
    const {
        name,
        image,
        height,
        weight,
        hp,
        attack,
        defense,
        special_attack,
        special_defense,
        speed,
        typespoke,
        CreateinDb
    }=req.body;
     console.log(name)
    let pokemonCreate=await Pokemon.create({
        name,
        image,
        height,
        weight,
        hp,
        attack,
        defense,
        special_attack,
        special_defense,
        speed,
        CreateinDb
    })
    let typesPokemon=await Types.findAll({
        where: {name:  typespoke}
    })
    pokemonCreate.addTypes(typesPokemon)
    res.send("personaje creado con exito");

 })


module.exports = router