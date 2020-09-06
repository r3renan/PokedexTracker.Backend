const models = require("../database/models");

const { Pokemon } = models;

module.exports = {
    async findPokemon(req, res) {
        const p = req.params.pokemon;
        const result = await Pokemon.findOne({
            // Checks if param is a number (Pokemon ID) or a string
            where: Number.isNaN(Number(p)) ? { name: p } : { id: p },
            include: ["sprite", "types"],
        }).then(pokemon => pokemon || "Pokemon not found");
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
            .then(pokemon => pokemon.sprite)
            .catch(() => "Pokemon not found");
        return res.json(result);
    },

    async showAllPokemonsByType(req, res) {
        const { type } = req.params;
        const result = await Pokemon.findAll({
            // Checks if param is a number (Type ID) or a string
            where: Number.isNaN(Number(type))
                ? { "$types.name$": type }
                : { "$types.id$": type },
            include: [{ association: "types", attributes: [] }],
            order: [["id", "ASC"]],
        }).then(pokemons => pokemons || "Type not found");
        return res.json(result);
    },
};
