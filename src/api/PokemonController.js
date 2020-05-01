const P = require('../services/pokeApi');

module.exports = {

    async createPokemonSeed(req, res) {
        const { generation } = req.params;

        var promisesArray = [];
        var seed = [];

        switch(generation){
            case "1":
                for(let i = 1; i <= 151; i++)
                    promisesArray.push(P.getPokemonByName(i));
                break;
            case "2":
                for(let i = 152; i <= 251; i++)
                    promisesArray.push(P.getPokemonByName(i));
                break;
            case "3":
                for(let i = 252; i <= 386; i++)
                    promisesArray.push(P.getPokemonByName(i));
                break;
        }

        Promise.all(promisesArray)
            .then(result => {
                
                result.forEach(function(registro){
                    seed.push({
                        "id" : registro.id,
                        "name" : registro.name,
                        "front-default"  : registro.sprites.front_default
                    })
                });

                return res.json(seed);
            })
            .catch(error => {
                return res.status(500).json({ Erro: `Comunicação interrompida na requisição ${error.config.url}`})
            })
    }
};