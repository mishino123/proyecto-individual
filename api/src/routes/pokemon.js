const express = require('express');
const router = express.Router();

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
   // console.log(pokemons)
}catch(error){
    return console.log("no se puede leer")
}
}
const pokes=apipoke()
router.get('/',async(req,res)=>{
    allPokemons=await apipoke();
    console.log(allPokemons);
    return res.json(allPokemons);

})





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
   const name=req.query;
   console.log(name)
   const detailpokemon= await detailspoke({name});
   return res.json(detailpokemon);
})
//*************************************************/

module.exports = router