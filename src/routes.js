const express = require('express');
const routes = express.Router();


routes.post('/users', (req, res) => {
    return res.json(req.body); //envia um json
});

module.exports = routes; //exportando as rotas daqui de dentro