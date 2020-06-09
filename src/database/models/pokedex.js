"use strict";
module.exports = (sequelize, DataTypes) => {
    const Pokedex = sequelize.define(
        "Pokedex",
        {
            pokemonId: DataTypes.INTEGER,
            userId: DataTypes.INTEGER,
        },
        { freezeTableName: true }
    );
    Pokedex.associate = function (models) {
        Pokedex.belongsTo(models.User, { foreignKey: "userId" });
        Pokedex.belongsTo(models.Pokemon, { foreignKey: "pokemonId" });
    };
    return Pokedex;
};
