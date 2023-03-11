const database = require('./db');
const Sequelize = require('sequelize')

const Filmes = database.define('filmes',{
    nome:{
        type:Sequelize.STRING,
    },
    duracao:{
        type:Sequelize.STRING,
    },
    poster:{
        type:Sequelize.STRING,
    },
    lancamento:{
        type:Sequelize.STRING,
    },
    genero:{
        type:Sequelize.STRING
    },
},
{
    freezeTableName: true,
    timestamps: false
})

module.exports = Filmes




