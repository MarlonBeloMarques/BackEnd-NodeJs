const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://user:user@nodejs-aula-5g6a6.mongodb.net/aula?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//executar codigo/rota
//GET, PUT, POST, DELETE
//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição, delete)
//req.body = Acessar corpo da requisição  

app.use(express.json());   
app.use(routes);

//porta
app.listen(3333);