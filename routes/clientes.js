// importação das bibliotecas
const express = require('express');

// função para manipulação de rotas
const rotas = express.Router();

// rota raiz para estudante
rotas.get("/", (req, res) => {
  res.send("Você está na raíz da rota clientes.");
});

// rota put para clientes
rotas.put('/', (req, res) => {
  res.send('Você está na rota put para clientes.');
});

// rota para o médoto post
rotas.post('/', (req, res) => {
    res.send('Você está na rota post para clientes.');
  });

// rota para o médoto delete
rotas.delete('/', (req, res) => {
    res.send('Você está na rota delete para clientes.');
  });


// exportar o código que manipula a rota para clientes
module.exports = rotas