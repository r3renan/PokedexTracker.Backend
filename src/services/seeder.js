const P = require("./pokeApi");
const models = require("../database/models");

module.exports = {
    async getData(i) {
        if (
            await models.Pokemon.findOne({
                where: { id: i },
            })
        ) {
            console.log(`Pokemon No ${i} already exists, skipping...`);
            return;
        }

        console.log(`Fetching info from PokeAPI about Pokemon No ${i}`);

        const pkmnInfo = await P.getPokemonByName(i).catch((err) =>
            console.log(
                "Oops, something went wrong, please run 'npx sequelize db:seed:all' again. " +
                    err
            )
        );

        await models.Pokemon.create({
            id: pkmnInfo.id,
            name: pkmnInfo.name,
            types: pkmnInfo.types.map((o) => o.type.name),
        }).catch((err) => console.log(err));

        await models.Sprite.create(
            Object.assign(pkmnInfo.sprites, { PokemonId: i })
        ).catch((err) => console.log(err));

        console.log(`${pkmnInfo.name} has been added to table Pokemons`);
        return;
    },
};
