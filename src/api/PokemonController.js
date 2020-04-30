const connection = require('../database/connection');
const P = require('../services/pokeApi');

module.exports = {

    async createPokemonSeed(req, res) {
        var promisesArray = [];
        var resultado = [];

        for(let i = 1; i <= 151; i++){
            promisesArray.push(P.getPokemonByName(i));
        }

        Promise.all(promisesArray)
            .then(result => {
                
                result.forEach(function(registro){
                    resultado.push({
                        "id" : registro.id,
                        "name" : registro.name,
                        "front-default"  : registro.sprites.front_default
                    })
                });

                return res.json(resultado);
            })
            .catch(error => {
                console.log("Erro na função getPokemonByName: ", error);
            })
    }
};