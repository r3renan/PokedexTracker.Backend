module.exports = (sequelize, DataTypes) => {
    const Pokemon = sequelize.define(
        "Pokemon",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            name: DataTypes.STRING,
        },
        { timestamps: false }
    );
    Pokemon.associate = models => {
        Pokemon.hasOne(models.Sprite, {
            foreignKey: "pokemonId",
            as: "sprite",
        });
        Pokemon.belongsToMany(models.User, {
            through: "Pokedex",
            foreignKey: "pokemonId",
            as: "users",
        });
        Pokemon.belongsToMany(models.Type, {
            through: "PokemonTypes",
            foreignKey: "pokemonId",
            as: "types",
        });
    };
    return Pokemon;
};
