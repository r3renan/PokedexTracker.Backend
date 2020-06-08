const models = require("../database/models");
const db = require("../database/models/index");

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
            db.sequelize.close();
            return res.json({ pokemon, sprites });
        }
        db.sequelize.close();
        return res.send("Pokemon nao encontrado");
    },
};
