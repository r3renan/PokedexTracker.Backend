"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Types", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Types");
    },
};
