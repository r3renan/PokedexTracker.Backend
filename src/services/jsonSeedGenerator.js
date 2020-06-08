const P = require("./pokeApi");
const path = require("path");
const fs = require("fs");
var pData = [];
var sData = [];

//Fetch data from PokeAPI
const fetchData = async (i) => {
    console.log("Fetching data for pokemon " + i);
    const pokemonData = await P.getPokemonByName(i);
    return pokemonData;
};

const generate = async (nStart, nMax) => {
    pData = [];
    sData = [];
    //Loops for the specified range (e.g. 1-151 (Generation I))
    for (let n = nStart; n <= nMax; n++) {
        const pokemon = await fetchData(n);

        //Filter stuff, can be changed later for more information
        pData.push({
            id: pokemon.id,
            name: pokemon.name,
            types: pokemon.types.map((o) => o.type.name),
        });
        sData.push(Object.assign({ PokemonId: pokemon.id }, pokemon.sprites));
    }

    //Writes all data to a json file
    fs.writeFile(
        path.resolve(
            "src",
            "database",
            "seeds",
            `${nStart}To${nMax}PokemonSeed.json`
        ),
        JSON.stringify(pData), //File content needs to be a string
        (err) => {
            if (err) console.log(err);
        }
    );

    fs.writeFile(
        path.resolve(
            "src",
            "database",
            "seeds",
            `${nStart}To${nMax}SpriteSeed.json`
        ),
        JSON.stringify(sData), //File content needs to be a string
        (err) => {
            if (err) console.log(err);
        }
    );

    console.log(`Generated json seeds for pokemons ${nStart} to ${nMax}`);
};

//Gen I - VII

const seedByGeneration = async () => {
    await generate(1, 151);
    await generate(152, 251);
    await generate(252, 386);
    await generate(387, 493);
    await generate(494, 649);
    await generate(650, 721);
    await generate(722, 807);
    console.log("Finished");
    process.exitCode = 0;
};

seedByGeneration();
