module.exports = (sequelize, DataTypes) => {
    const Type = sequelize.define(
        "Type",
        {
            name: DataTypes.STRING,
        },
        { timestamps: false }
    );
    Type.associate = models => {
        Type.belongsToMany(models.Pokemon, {
            through: "PokemonTypes",
            foreignKey: "typeId",
            as: "pokemons",
        });
    };
    return Type;
};
