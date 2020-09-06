const path = require("path");
const fs = require("fs");
const P = require("../services/pokeApi");

const pData = [];
const sData = [];
const tData = [];
const ptData = [];

// Fetch data from PokeAPI
const fetchPokemonData = async i => {
    console.log(`Fetching data for pokemon ${i}`);
    const pokemonData = await P.getPokemonByName(i);
    return pokemonData;
};

const generatePokemonData = async () => {
    // Loops for the specified range (e.g. 1-151 (Generation I))
    for (let i = 1; i <= 807; i++) {
        const pokemon = await fetchPokemonData(i);

        // Filter stuff, can be changed later for more information
        pData.push({
            id: pokemon.id,
            name: pokemon.name,
        });
        sData.push({ pokemonId: pokemon.id, ...pokemon.sprites });
        ptData.push({
            id: pokemon.id,
            types: pokemon.types.map(o => o.type.name),
        });
    }

    fs.writeFile(
        path.resolve("src", "database", "seeds", "PokemonSeed.json"),
        JSON.stringify(pData), // File content needs to be a string
        err => {
            if (err) console.log(err);
        }
    );

    fs.writeFile(
        path.resolve("src", "database", "seeds", "SpriteSeed.json"),
        JSON.stringify(sData), // File content needs to be a string
        err => {
            if (err) console.log(err);
        }
    );

    fs.writeFile(
        path.resolve("src", "database", "seeds", "PokemonTypesSeed.json"),
        JSON.stringify(ptData), // File content needs to be a string
        err => {
            if (err) console.log(err);
        }
    );

    console.log("Generated json seeds for pokemons 1 ~ 807");
};

const generateTypeData = async () => {
    for (let i = 1; i <= 18; i++) {
        console.log(`Fetching data from type ${i}`);
        const type = await P.getTypeByName(i);
        tData.push({ name: type.name });
    }

    fs.writeFile(
        path.resolve("src", "database", "seeds", "TypesSeed.json"),
        JSON.stringify(tData),
        err => {
            if (err) console.log(err);
        }
    );
};

// Gen I - VII

const seed = async () => {
    await generatePokemonData();
    await generateTypeData();
    console.log("Finished");
    process.exitCode = 0;
};

module.exports = seed();
