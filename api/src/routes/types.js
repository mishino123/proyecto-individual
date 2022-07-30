const express=require("express");
const router=express.Router();
const axios=require("axios");

const types=async()=>{
  try{
        const info=await axios.get("https://pokeapi.co/api/v2/type")
        const infotypes=info.data.results
        const types=[]
        for(let i=0;i<infotypes.length;i++){
            const name=infotypes[i].name
            types.push(name)
        }
      return types
  }catch(error){
        console.log(error)
  }

}
types()

router.get("/",async(req,res)=>{
 const typepokes=await types()
 res.json(typepokes)
})

module.exports = router