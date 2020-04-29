const express = require('express');
const PokemonController = require('./PokemonController');

const routes = express.Router();

routes.get('/pokemon/:id', PokemonController.pokeapi);

module.exports = routes;