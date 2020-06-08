"use strict";
const pSeed = require("../seeds/Gen7PokemonSeed.json");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Pokemons", pSeed);
    },

    down: (queryInterface, Sequelize) => {},
};
