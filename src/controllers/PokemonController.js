const models = require("../database/models");
const Pokemon = models.Pokemon;

module.exports = {
    async findPokemon(req, res) {
        const p = req.params.pokemon;
        const result = await Pokemon.findOne({
            // Checks if param is a number (Pokemon ID) or a string
            where: Number.isNaN(Number(p)) ? { name: p } : { id: p },
            include: ["sprite", "types"],
        });
        return res.json(result);
    },

    async showPokemonSprites(req, res) {
        const p = req.params.pokemon;
        const result = await Pokemon.findOne({
            // Checks if param is a number (Pokemon ID) or a string
            where: Number.isNaN(Number(p)) ? { name: p } : { id: p },
            include: [
                {
                    association: "sprite",
                    attributes: { exclude: ["pokemonId"] },
                },
            ],
            attributes: [],
        })
            .then((pokemon) => pokemon.sprite)
            .catch((err) => "Pokemon not found");
        return res.json(result);
    },

    async showAllPokemonsByType(req, res) {
        const type = req.params.type;
        const result = await Pokemon.findAll({
            // Checks if param is a number (Type ID) or a string
            where: Number.isNaN(Number(type))
                ? { "$types.name$": type }
                : { "$types.id$": type },
            include: [{ association: "types", attributes: [] }],
            order: [["id", "ASC"]],
        });
        return res.json(result);
    },
};
