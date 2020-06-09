"use strict";
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            username: DataTypes.CITEXT,
            password: DataTypes.STRING,
            email: DataTypes.CITEXT,
        },
        {}
    );
    User.associate = function (models) {
        User.belongsToMany(models.Pokemon, {
            through: "Pokedex",
            foreignKey: "userId",
            as: "pokemons",
        });
    };
    return User;
};
