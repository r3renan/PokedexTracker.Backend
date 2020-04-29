const connection = require('../database/connection');
const P = require('../services/pokeApi');

module.exports = {
    async pokeapi(req, res) {
        const { id } = req.params;

        await P.getPokemonByName(id)
        .then(function(response) {
            const resultado = {
                "id" : response.id,
                "name" : response.name,
                "sprite" : response.sprites.front_default
            };
            return res.json(resultado);
        })
        .catch(function(error) {
            console.log("Ocorreu um erro em getPokemonByName: ", error);
            return res.status(500).json({ err: "Ocorreu um erro em getPokemonByName, verifique o console para detalhes." });
        })
    } 
};