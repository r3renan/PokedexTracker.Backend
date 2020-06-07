const models = require("../database/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
    async findPokemon(req, res) {
        const pokemon = await models.pokemon.findOne({
            where: {
                [Op.or]: [
                    { pokemonId: req.params.pokemon },
                    { name: req.params.pokemon },
                ],
            },
        });
        return pokemon ? res.json(pokemon) : res.send("Pokemon nao encontrado");
    },
};
