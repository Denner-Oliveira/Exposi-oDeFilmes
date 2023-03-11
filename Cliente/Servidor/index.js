const express = require('express');
const cors = require('cors')

var filmes;

async function a(){
    const database = require('./db');
    const Filmes = require('./filmes')
    await database.sync();
    filmes = await Filmes.findAll()
    return filmes
}
a()

// SERVIDOR //
const app = express();
console.log()

app.use(cors())
app.get('/',(req,res)=>{
    res.json(filmes);
})

app.listen(3001,()=>{
    console.log(`Servidor aberto na porta ${3001}`)
})