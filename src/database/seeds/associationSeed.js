const ptSeed = require("./PokemonTypesSeed.json");
const models = require("../models");
const Pokemon = models.Pokemon;
const Type = models.Type;

const createPkmnTypeAssociation = () => {
    ptSeed.forEach((o) =>
        Type.findAll({
            where: { name: o.types },
            logging: false,
        }).then((types) =>
            Pokemon.findOne({
                where: { id: o.id },
                logging: false,
            }).then((pokemon) => pokemon.setTypes(types, { logging: false }))
        )
    );
};

module.exports = createPkmnTypeAssociation();
