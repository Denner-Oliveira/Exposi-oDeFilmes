const express = require('express');
const cors = require('cors')
const database = require('./db');
const Filmes = require('./filmes')

database.sync();
let response;

async function busca(){
    response = await Filmes.findAll()
}

const app = express();
app.use(cors())
busca()

app.get('/',(req,res)=>{
    res.json(response);
})

app.listen(3001,()=>{
    console.log(`Servidor aberto na porta ${3001}`)
})
