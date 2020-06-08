"use strict";
module.exports = (sequelize, DataTypes) => {
    const Pokemon = sequelize.define(
        "Pokemon",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            name: DataTypes.STRING,
            types: DataTypes.ARRAY(DataTypes.STRING),
        },
        { timestamps: false }
    );
    Pokemon.associate = function (models) {
        Pokemon.hasOne(models.Sprite);
    };
    return Pokemon;
};
