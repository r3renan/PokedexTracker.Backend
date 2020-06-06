const P = require("./pokeApi");
const models = require("../database/models");

module.exports = {
    async getPokemon(i) {
        const pokemon = await P.getPokemonByName(i);
        models.pokemon.findOrCreate({
            where: { pokemonId: pokemon.id },
            defaults: {
                name: pokemon.name,
                spriteMale: pokemon.sprites.front_default,
                spriteFemale: pokemon.sprites.front_female,
                type1: pokemon.types[0] ? pokemon.types[0].type.name : null,
                type2: pokemon.types[1] ? pokemon.types[1].type.name : null,
            },
        });
    },
};
