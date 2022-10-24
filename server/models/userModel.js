const {Sequelize, DataTypes} = require('sequelize');

module.exports=(Sequelize,DataTypes)=>{
    const user=Sequelize.define("user",{
        nom:{
            type:DataTypes.STRING 
        },
        prenom:{
            type:DataTypes.STRING
        },
        age:{
            type:DataTypes.STRING
        }
    })
    return user
}