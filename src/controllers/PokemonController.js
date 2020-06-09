const models = require("../database/models");
const Pokemon = models.Pokemon;

const idOrName = (s) => {
    return Number.isNaN(Number(s));
};

module.exports = {
    async findPokemon(req, res) {
        const p = req.params.pokemon;
        const result = await Pokemon.findOne({
            where: idOrName(p) ? { name: p } : { id: p },
            include: ["sprite", "types"],
        });
        return res.json(result);
    },

    async showPokemonSprites(req, res) {
        const p = req.params.pokemon;
        const result = await Pokemon.findOne({
            where: idOrName(p) ? { name: p } : { id: p },
            include: [
                {
                    association: "sprite",
                    attributes: { exclude: ["pokemonId"] },
                },
            ],
            attributes: [],
        }).then((pokemon) => pokemon.sprite);
        return res.json(result);
    },

    async showAllPokemonsByType(req, res) {
        const type = req.params.type;
        const result = await Pokemon.findAll({
            where: idOrName(type)
                ? { "$types.name$": type }
                : { "$types.id$": type },
            include: [{ association: "types", attributes: [] }],
            order: [["id", "ASC"]],
        });
        return res.json(result);
    },
};
