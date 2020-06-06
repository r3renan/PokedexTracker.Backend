const express = require("express");
const collectData = require("./services/collectData");
const PokemonController = require("./api/PokemonController");

const routes = express.Router();

routes.get("/admin/createPokemonSeed/:generation", collectData.collectData);
routes.get("/pokemons/:pokemon", PokemonController.findPokemon);

module.exports = routes;
