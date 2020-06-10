"use strict";
const uSeed = require("../seeds/UserSeed.json");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Users", uSeed);
    },

    down: (queryInterface, Sequelize) => {},
};
