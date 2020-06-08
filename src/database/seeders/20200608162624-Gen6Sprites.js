"use strict";
const sSeed = require("../seeds/Gen6SpriteSeed.json");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Sprites", sSeed);
    },

    down: (queryInterface, Sequelize) => {},
};
