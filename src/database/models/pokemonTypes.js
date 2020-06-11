module.exports = (sequelize, DataTypes) => {
    const PokemonTypes = sequelize.define(
        "PokemonTypes",
        {
            pokemonId: DataTypes.INTEGER,
            typeId: DataTypes.INTEGER,
        },
        { timestamps: false }
    );
    PokemonTypes.associate = models => {
        PokemonTypes.belongsTo(models.Pokemon, { foreignKey: "pokemonId" });
        PokemonTypes.belongsTo(models.Type, { foreignKey: "typeId" });
    };
    return PokemonTypes;
};
