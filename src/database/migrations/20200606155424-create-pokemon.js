module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Pokemons", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            types: {
                type: Sequelize.ARRAY(Sequelize.STRING),
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Pokemons");
    },
};
