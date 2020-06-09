"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn("Pokemons", "types");
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            "Pokemons",
            "types",
            Sequelize.ARRAY(Sequelize.STRING)
        );
    },
};
