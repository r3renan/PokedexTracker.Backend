module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            name: DataTypes.CITEXT,
            password: DataTypes.STRING,
            email: DataTypes.CITEXT,
        },
        {}
    );
    User.associate = models => {
        User.belongsToMany(models.Pokemon, {
            through: "Pokedex",
            foreignKey: "userId",
            as: "pokemons",
        });
    };
    return User;
};
