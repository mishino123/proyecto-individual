const express=require("express");
const router=express.Router();
const axios=require("axios");
const {Types} =require("../db");

router.get("/",async (req,res)=>{
     const info=await axios.get("https://pokeapi.co/api/v2/type")
     const infotypes=info.data.results
    //  console.log(infotypes.length)
     infotypes.map(e=>{
     Types.findOrCreate({
      where:{name:e.name}
     })
    })

    const alltypes=await Types.findAll();
 
    const sendData=alltypes.map(e=>{
     return e.name
    })
    // console.log(sendData)
    res.send(sendData)
})






// const types1=async()=>{
//   try{
//         const info=await axios.get("https://pokeapi.co/api/v2/type")
//         const infotypes=info.data.results
//         const types=[]
//         for(let i=0;i<infotypes.length;i++){
//             const name=infotypes[i].name
//             types.push(name)
//         }
//       return types
//   }catch(error){
//         console.log(error)
//   }

// }
// types1()

// router.get("/",async(req,res)=>{
//  const typepokes=await types1()
//  res.json(typepokes)
// })

module.exports = router