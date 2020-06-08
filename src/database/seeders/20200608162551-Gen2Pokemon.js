"use strict";
const pSeed = require("../seeds/Gen2PokemonSeed.json");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Pokemons", pSeed);
    },

    down: (queryInterface, Sequelize) => {},
};