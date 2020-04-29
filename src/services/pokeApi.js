const Pokedex = require('pokedex-promise-v2');

const P = new Pokedex({
    protocol: 'https',
    hostName: 'pokeapi.co',
    versionPath: '/api/v2/'
});

module.exports = P;