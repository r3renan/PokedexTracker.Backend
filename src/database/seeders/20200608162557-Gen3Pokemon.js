"use strict";
const pSeed = require("../seeds/Gen3PokemonSeed.json");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Pokemons", pSeed);
    },

    down: (queryInterface, Sequelize) => {},
};
