"use strict";
module.exports = (sequelize, DataTypes) => {
    const pokemon = sequelize.define(
        "pokemon",
        {
            pokemonId: DataTypes.INTEGER,
            name: DataTypes.STRING,
            spriteMale: DataTypes.STRING,
            spriteFemale: DataTypes.STRING,
            type1: DataTypes.STRING,
            type2: DataTypes.STRING,
        },
        {}
    );
    pokemon.associate = function (models) {
        // associations can be defined here
    };
    return pokemon;
};
