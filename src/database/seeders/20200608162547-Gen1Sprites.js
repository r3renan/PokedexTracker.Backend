"use strict";
const sSeed = require("../seeds/Gen1SpriteSeed.json");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Sprites", sSeed);
    },

    down: (queryInterface, Sequelize) => {},
};