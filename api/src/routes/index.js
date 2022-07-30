
const { Router } = require('express');


const pokemon=require('./pokemon.js');
const types=require("./types");
// Importar todos los routers;
// Ejemplo: const authRouter = require(./auth.js');
const ruta= Router();

// ruta.get('/',(req,res)=>{
//     res.status(201).send("hola");
// })


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

ruta.use('/pokemons', pokemon)
ruta.use("/types",types)
module.exports = ruta;