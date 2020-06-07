const models = require("../database/models");
const Sequelize = require("sequelize");

module.exports = {
    async findPokemon(req, res) {
        const isId = Number.isInteger(req.params.pokemon);
        const pokemon = await models.Pokemon.findOne({
            where: isId
                ? { id: req.params.pokemon }
                : { name: req.params.pokemon },
        });
        if (pokemon) {
            const sprites = await models.Sprite.findOne({
                where: { PokemonId: pokemon.id },
            });
            return res.json({ pokemon, sprites });
        }
        return res.send("Pokemon nao encontrado");
    },
};
