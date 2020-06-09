const models = require("../database/models");
const User = models.User;
const Pokemon = models.Pokemon;

module.exports = {
    async createUser(req, res) {
        if (await User.findOne({ where: { email: req.body.email } })) {
            return res.send("This email is being used by another account.");
        }
        const user = await User.findOrCreate({
            where: { username: req.body.username },
            defaults: req.body,
        });
        return user[1] ? res.json(user[0]) : res.send("Username unavailable");
    },

    async findUser(req, res) {
        const user = await User.findOne({
            where: { username: req.params.username },
            include: ["pokemons"],
        });
        return res.json(user);
    },

    async addPokemonToUser(req, res) {
        const user = await User.findOne({
            where: { username: req.headers.auth },
            include: ["pokemons"],
        });
        const pokemon = await Pokemon.findOne({
            where: { id: req.params.pokemonId },
        });
        const join = await user.addPokemon(pokemon);
        return join
            ? res.json(join)
            : res.send(
                  `${pokemon.name} is already registered at ${user.username}'s Pokedex`
              );
    },
};
