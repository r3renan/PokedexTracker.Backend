const express = require("express");
const PokemonController = require("./controllers/PokemonController");

const routes = express.Router();

routes.get("/pokemons/:pokemon", PokemonController.findPokemon);

module.exports = routes;
