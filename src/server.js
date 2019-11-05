const express = require('express');

const app = express();

//executar codigo/rota
app.get('/', (req, res) => {
    return res.json({ message: "Hello Word"}); //envia um json
});   

//porta
app.listen(3333);