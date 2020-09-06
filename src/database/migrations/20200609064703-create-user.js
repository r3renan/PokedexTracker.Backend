module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize
            .query("CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public")
            .then(() =>
                queryInterface.createTable("Users", {
                    id: {
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
                        type: Sequelize.INTEGER,
                    },
                    username: {
                        allowNull: false,
                        unique: true,
                        type: Sequelize.CITEXT,
                    },
                    password: {
                        allowNull: false,
                        type: Sequelize.STRING,
                    },
                    email: {
                        allowNull: false,
                        unique: true,
                        type: Sequelize.CITEXT,
                    },
                    createdAt: {
                        allowNull: false,
                        type: Sequelize.DATE,
                    },
                    updatedAt: {
                        allowNull: false,
                        type: Sequelize.DATE,
                    },
                })
            );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Users");
    },
};
