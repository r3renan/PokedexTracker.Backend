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
        {}
    );
    Pokemon.associate = function (models) {
        // associations can be defined here
    };
    return Pokemon;
};
