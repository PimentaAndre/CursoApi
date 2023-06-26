'use strict';

//Separando o servidor
const express = require('express');
const router = express.Router(); //Esse Router é de rota se dar uma url o usurio consegue chegar ate minha pagina web

//Configurando a primeira rota
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.2"
    });
});

module.exports = router;