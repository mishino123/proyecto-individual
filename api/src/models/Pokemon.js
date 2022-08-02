const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define('Pokemon', {
    id: {
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
       primaryKey:true,
       allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type:DataTypes.STRING,
      
    },
    
    height:{
      type:DataTypes.STRING,
   
    },
    weight:{
      type:DataTypes.STRING,
     
    },
    hp:{
      type:DataTypes.STRING,
      
    },
    attack:{
      type:DataTypes.STRING,
     
    }, 
    
    defense:{
      type:DataTypes.STRING,
    
    },

    special_attack:{
      type:DataTypes.STRING,
    
    },
    special_defense:{
      type:DataTypes.STRING,
    
    },
    speed:{
      type:DataTypes.STRING,
     
    },

    CreateinDb:{
      type:DataTypes.BOOLEAN,
      defaultValue:true
    },
    
   
  });
};
