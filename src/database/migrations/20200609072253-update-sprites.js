module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface
            .changeColumn("Sprites", "PokemonId", {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: "Pokemons",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            })
            .then(() => {
                queryInterface.renameColumn(
                    "Sprites",
                    "PokemonId",
                    "pokemonId"
                );
            });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface
            .changeColumn("Sprites", "pokemonId", {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: "Pokemons",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            })
            .then(() => {
                queryInterface.renameColumn(
                    "Sprites",
                    "pokemonId",
                    "PokemonId"
                );
            });
    },
};
