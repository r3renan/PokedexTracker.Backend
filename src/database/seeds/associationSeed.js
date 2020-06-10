const ptSeed = require("./PokemonTypesSeed.json");
const models = require("../models");
const Pokemon = models.Pokemon;
const Type = models.Type;
const User = models.User;

const tenRndmPkmns = () => {
    const idArr = new Set();
    let id = 0;
    for (let i = 1; i <= 10; i++) {
        do {
            id = Math.round(Math.random() * 807);
        } while (idArr.has(id));
        idArr.add(id);
    }
    return Array.from(idArr);
};

const pkmnTypeAssociation = () => {
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

const userPkmnAssociation = () => {
    User.findAll({ logging: false }).then((users) => {
        users.forEach((user) => {
            user.setPokemons(tenRndmPkmns(), { logging: false });
        });
    });
};

const doAssociations = () => {
    pkmnTypeAssociation();
    userPkmnAssociation();
};

module.exports = doAssociations();
