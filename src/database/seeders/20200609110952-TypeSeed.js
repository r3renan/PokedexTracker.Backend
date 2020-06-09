"use strict";
const tSeed = require("../seeds/TypesSeed.json");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Types", tSeed);
    },

    down: (queryInterface, Sequelize) => {},
};
