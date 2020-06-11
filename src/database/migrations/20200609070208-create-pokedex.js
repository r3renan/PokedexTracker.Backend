module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Pokedex", {
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
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: "Users",
                    key: "id",
                },
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
        return queryInterface.dropTable("Pokedex");
    },
};
