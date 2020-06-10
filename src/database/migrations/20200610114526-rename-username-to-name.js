"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.renameColumn("Users", "username", "name");
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.renameColumn("Users", "name", "username");
    },
};
