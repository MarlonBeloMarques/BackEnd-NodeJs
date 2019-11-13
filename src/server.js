const express = require('express');

const app = express();

//executar codigo/rota
//GET, PUT, POST, DELETE
//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição, delete)
//req.body = Acessar corpo da requisição  

app.use(express.json());

app.post('/users', (req, res) => {
    return res.json(req.body); //envia um json
});   

//porta
app.listen(3333);