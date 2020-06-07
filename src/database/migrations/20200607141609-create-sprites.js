"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Sprites", {
            PokemonId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: "Pokemons",
                    key: "id",
                },
            },
            front_default: {
                type: Sequelize.STRING,
            },
            front_shiny: {
                type: Sequelize.STRING,
            },
            front_female: {
                type: Sequelize.STRING,
            },
            front_shiny_female: {
                type: Sequelize.STRING,
            },
            back_default: {
                type: Sequelize.STRING,
            },
            back_shiny: {
                type: Sequelize.STRING,
            },
            back_female: {
                type: Sequelize.STRING,
            },
            back_shiny_female: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Sprites");
    },
};
