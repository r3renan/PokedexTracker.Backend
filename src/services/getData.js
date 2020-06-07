const P = require("./pokeApi");
const models = require("../database/models");

module.exports = {
    async byName(i) {
        const pkmnInfo = await P.getPokemonByName(i);
        await models.Pokemon.findOrCreate({
            where: { id: pkmnInfo.id },
            defaults: {
                name: pkmnInfo.name,
                types: pkmnInfo.types.map((o) => o.type.name),
            },
        }).catch((err) => console.log(err));
        await models.Sprite.findOrCreate({
            where: { PokemonId: pkmnInfo.id },
            defaults: pkmnInfo.sprites,
        }).catch((err) => console.log(err));
    },
};
