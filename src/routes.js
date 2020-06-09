const express = require("express");
const PokemonController = require("./controllers/PokemonController");
const UserController = require("./controllers/UserController");

const routes = express.Router();

routes.get("/pokemons/:pokemon", PokemonController.findPokemon);
routes.get("/pokemons/byType/:type", PokemonController.showAllPokemonsByType);
routes.get("/pokemons/sprites/:pokemon", PokemonController.showPokemonSprites);

routes.post("/user/register", UserController.createUser);
routes.get("/user/search/:username", UserController.findUser);
routes.get("/user/addPokemon/:pokemonId", UserController.addPokemonToUser);

routes.all("*", (req, res) => res.status(404).send("PAGE NOT FOUND"));

module.exports = routes;
