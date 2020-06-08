"use strict";
module.exports = (sequelize, DataTypes) => {
    const Sprite = sequelize.define(
        "Sprite",
        {
            PokemonId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            front_default: DataTypes.STRING,
            front_shiny: DataTypes.STRING,
            front_female: DataTypes.STRING,
            front_shiny_female: DataTypes.STRING,
            back_default: DataTypes.STRING,
            back_shiny: DataTypes.STRING,
            back_female: DataTypes.STRING,
            back_shiny_female: DataTypes.STRING,
        },
        { timestamps: false }
    );
    Sprite.associate = function (models) {};
    return Sprite;
};
