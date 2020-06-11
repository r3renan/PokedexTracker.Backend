module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("PokemonTypes", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            pokemonId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: "Pokemons",
                    key: "id",
                },
            },
            typeId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: "Types",
                    key: "id",
                },
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("PokemonTypes");
    },
};
