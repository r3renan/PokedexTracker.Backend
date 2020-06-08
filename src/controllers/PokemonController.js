const models = require("../database/models");

module.exports = {
    async findPokemon(req, res) {
        models.sequelize.sync();
        const pokemon = await models.Pokemon.findOne({
            where: { id: req.params.pokemon },
        });
        return res.json({
            Pokemon: pokemon,
            Sprites: await pokemon.getSprite(),
        });
    },
};
