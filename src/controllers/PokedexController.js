const models = require("../database/models");
const Pokemon = models.Pokemon;
const User = models.User;
const Pokedex = models.Pokedex;

module.exports = {
    async registerPokemon(req, res) {
        const user = await User.findOne({
            where: { name: req.headers.auth },
            attributes: { exclude: ["password"] },
            include: [{ association: "pokemons", through: { attributes: [] } }],
        });
        const pokemon = await Pokemon.findOne({
            where: { id: req.params.pokemon },
        });

        if (!pokemon) return res.send("Pokemon not found");

        if (await user.addPokemon(pokemon)) {
            user.changed("updatedAt", true);
            user.save();
            return res.send(`${pokemon.name} added to ${user.name}'s Pokedex`);
        }

        return res.send(
            `${pokemon.name} already exists at ${user.name}'s Pokedex`
        );
    },

    async removePokemon(req, res) {
        const p = req.params.pokemon;
        const pokemon = await Pokemon.findOne({
            where: Number.isNaN(Number(p)) ? { name: p } : { id: p },
        });

        if (!pokemon) {
            return res.send("Pokemon not found");
        }

        const user = await User.findOne({
            where: { name: req.headers.auth },
        });

        const deleted = await Pokedex.destroy({
            where: { pokemonId: pokemon.id, userId: user.id },
        });

        return deleted
            ? res.send(`${pokemon.name} deleted from ${user.name}'s Pokedex`)
            : res.send(`${pokemon.name} not found at ${user.name}'s Pokedex`);
    },
};
