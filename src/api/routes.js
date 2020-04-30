const express = require('express');
const PokemonController = require('./PokemonController');

const routes = express.Router();

routes.get('/admin/createPokemonSeed', PokemonController.createPokemonSeed);

module.exports = routes;