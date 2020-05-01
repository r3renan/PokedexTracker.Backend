
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pokemon').del()
    .then(function () {
      // Inserts seed entries
      return knex('pokemon').insert([
        {
          "id": 1,
          "name": "bulbasaur",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        },
        {
          "id": 2,
          "name": "ivysaur",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
        },
        {
          "id": 3,
          "name": "venusaur",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
        },
        {
          "id": 4,
          "name": "charmander",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        },
        {
          "id": 5,
          "name": "charmeleon",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
        },
        {
          "id": 6,
          "name": "charizard",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        },
        {
          "id": 7,
          "name": "squirtle",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        },
        {
          "id": 8,
          "name": "wartortle",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
        },
        {
          "id": 9,
          "name": "blastoise",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
        },
        {
          "id": 10,
          "name": "caterpie",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
        },
        {
          "id": 11,
          "name": "metapod",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
        },
        {
          "id": 12,
          "name": "butterfree",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
        },
        {
          "id": 13,
          "name": "weedle",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
        },
        {
          "id": 14,
          "name": "kakuna",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
        },
        {
          "id": 15,
          "name": "beedrill",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
        },
        {
          "id": 16,
          "name": "pidgey",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
        },
        {
          "id": 17,
          "name": "pidgeotto",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
        },
        {
          "id": 18,
          "name": "pidgeot",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
        },
        {
          "id": 19,
          "name": "rattata",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
        },
        {
          "id": 20,
          "name": "raticate",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
        },
        {
          "id": 21,
          "name": "spearow",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
        },
        {
          "id": 22,
          "name": "fearow",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
        },
        {
          "id": 23,
          "name": "ekans",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
        },
        {
          "id": 24,
          "name": "arbok",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
        },
        {
          "id": 25,
          "name": "pikachu",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        },
        {
          "id": 26,
          "name": "raichu",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
        },
        {
          "id": 27,
          "name": "sandshrew",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
        },
        {
          "id": 28,
          "name": "sandslash",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
        },
        {
          "id": 29,
          "name": "nidoran-f",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
        },
        {
          "id": 30,
          "name": "nidorina",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
        },
        {
          "id": 31,
          "name": "nidoqueen",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
        },
        {
          "id": 32,
          "name": "nidoran-m",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
        },
        {
          "id": 33,
          "name": "nidorino",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
        },
        {
          "id": 34,
          "name": "nidoking",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
        },
        {
          "id": 35,
          "name": "clefairy",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
        },
        {
          "id": 36,
          "name": "clefable",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
        },
        {
          "id": 37,
          "name": "vulpix",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
        },
        {
          "id": 38,
          "name": "ninetales",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
        },
        {
          "id": 39,
          "name": "jigglypuff",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
        },
        {
          "id": 40,
          "name": "wigglytuff",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
        },
        {
          "id": 41,
          "name": "zubat",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
        },
        {
          "id": 42,
          "name": "golbat",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
        },
        {
          "id": 43,
          "name": "oddish",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
        },
        {
          "id": 44,
          "name": "gloom",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
        },
        {
          "id": 45,
          "name": "vileplume",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
        },
        {
          "id": 46,
          "name": "paras",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
        },
        {
          "id": 47,
          "name": "parasect",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
        },
        {
          "id": 48,
          "name": "venonat",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
        },
        {
          "id": 49,
          "name": "venomoth",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
        },
        {
          "id": 50,
          "name": "diglett",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
        },
        {
          "id": 51,
          "name": "dugtrio",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
        },
        {
          "id": 52,
          "name": "meowth",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
        },
        {
          "id": 53,
          "name": "persian",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
        },
        {
          "id": 54,
          "name": "psyduck",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
        },
        {
          "id": 55,
          "name": "golduck",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
        },
        {
          "id": 56,
          "name": "mankey",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"
        },
        {
          "id": 57,
          "name": "primeape",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"
        },
        {
          "id": 58,
          "name": "growlithe",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
        },
        {
          "id": 59,
          "name": "arcanine",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
        },
        {
          "id": 60,
          "name": "poliwag",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
        },
        {
          "id": 61,
          "name": "poliwhirl",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"
        },
        {
          "id": 62,
          "name": "poliwrath",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
        },
        {
          "id": 63,
          "name": "abra",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"
        },
        {
          "id": 64,
          "name": "kadabra",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
        },
        {
          "id": 65,
          "name": "alakazam",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
        },
        {
          "id": 66,
          "name": "machop",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
        },
        {
          "id": 67,
          "name": "machoke",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"
        },
        {
          "id": 68,
          "name": "machamp",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
        },
        {
          "id": 69,
          "name": "bellsprout",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"
        },
        {
          "id": 70,
          "name": "weepinbell",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"
        },
        {
          "id": 71,
          "name": "victreebel",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
        },
        {
          "id": 72,
          "name": "tentacool",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"
        },
        {
          "id": 73,
          "name": "tentacruel",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
        },
        {
          "id": 74,
          "name": "geodude",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
        },
        {
          "id": 75,
          "name": "graveler",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
        },
        {
          "id": 76,
          "name": "golem",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
        },
        {
          "id": 77,
          "name": "ponyta",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
        },
        {
          "id": 78,
          "name": "rapidash",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
        },
        {
          "id": 79,
          "name": "slowpoke",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
        },
        {
          "id": 80,
          "name": "slowbro",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
        },
        {
          "id": 81,
          "name": "magnemite",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
        },
        {
          "id": 82,
          "name": "magneton",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
        },
        {
          "id": 83,
          "name": "farfetchd",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"
        },
        {
          "id": 84,
          "name": "doduo",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"
        },
        {
          "id": 85,
          "name": "dodrio",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
        },
        {
          "id": 86,
          "name": "seel",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"
        },
        {
          "id": 87,
          "name": "dewgong",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
        },
        {
          "id": 88,
          "name": "grimer",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
        },
        {
          "id": 89,
          "name": "muk",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
        },
        {
          "id": 90,
          "name": "shellder",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"
        },
        {
          "id": 91,
          "name": "cloyster",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
        },
        {
          "id": 92,
          "name": "gastly",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
        },
        {
          "id": 93,
          "name": "haunter",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
        },
        {
          "id": 94,
          "name": "gengar",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
        },
        {
          "id": 95,
          "name": "onix",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
        },
        {
          "id": 96,
          "name": "drowzee",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"
        },
        {
          "id": 97,
          "name": "hypno",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
        },
        {
          "id": 98,
          "name": "krabby",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
        },
        {
          "id": 99,
          "name": "kingler",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
        },
        {
          "id": 100,
          "name": "voltorb",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
        },
        {
          "id": 101,
          "name": "electrode",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
        },
        {
          "id": 102,
          "name": "exeggcute",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png"
        },
        {
          "id": 103,
          "name": "exeggutor",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
        },
        {
          "id": 104,
          "name": "cubone",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png"
        },
        {
          "id": 105,
          "name": "marowak",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
        },
        {
          "id": 106,
          "name": "hitmonlee",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"
        },
        {
          "id": 107,
          "name": "hitmonchan",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png"
        },
        {
          "id": 108,
          "name": "lickitung",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"
        },
        {
          "id": 109,
          "name": "koffing",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"
        },
        {
          "id": 110,
          "name": "weezing",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
        },
        {
          "id": 111,
          "name": "rhyhorn",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png"
        },
        {
          "id": 112,
          "name": "rhydon",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
        },
        {
          "id": 113,
          "name": "chansey",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png"
        },
        {
          "id": 114,
          "name": "tangela",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"
        },
        {
          "id": 115,
          "name": "kangaskhan",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"
        },
        {
          "id": 116,
          "name": "horsea",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
        },
        {
          "id": 117,
          "name": "seadra",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png"
        },
        {
          "id": 118,
          "name": "goldeen",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png"
        },
        {
          "id": 119,
          "name": "seaking",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"
        },
        {
          "id": 120,
          "name": "staryu",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"
        },
        {
          "id": 121,
          "name": "starmie",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
        },
        {
          "id": 122,
          "name": "mr-mime",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
        },
        {
          "id": 123,
          "name": "scyther",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
        },
        {
          "id": 124,
          "name": "jynx",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
        },
        {
          "id": 125,
          "name": "electabuzz",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
        },
        {
          "id": 126,
          "name": "magmar",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"
        },
        {
          "id": 127,
          "name": "pinsir",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"
        },
        {
          "id": 128,
          "name": "tauros",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
        },
        {
          "id": 129,
          "name": "magikarp",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
        },
        {
          "id": 130,
          "name": "gyarados",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
        },
        {
          "id": 131,
          "name": "lapras",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
        },
        {
          "id": 132,
          "name": "ditto",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        },
        {
          "id": 133,
          "name": "eevee",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
        },
        {
          "id": 134,
          "name": "vaporeon",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
        },
        {
          "id": 135,
          "name": "jolteon",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
        },
        {
          "id": 136,
          "name": "flareon",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
        },
        {
          "id": 137,
          "name": "porygon",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png"
        },
        {
          "id": 138,
          "name": "omanyte",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"
        },
        {
          "id": 139,
          "name": "omastar",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
        },
        {
          "id": 140,
          "name": "kabuto",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"
        },
        {
          "id": 141,
          "name": "kabutops",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
        },
        {
          "id": 142,
          "name": "aerodactyl",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"
        },
        {
          "id": 143,
          "name": "snorlax",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
        },
        {
          "id": 144,
          "name": "articuno",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
        },
        {
          "id": 145,
          "name": "zapdos",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"
        },
        {
          "id": 146,
          "name": "moltres",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"
        },
        {
          "id": 147,
          "name": "dratini",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"
        },
        {
          "id": 148,
          "name": "dragonair",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png"
        },
        {
          "id": 149,
          "name": "dragonite",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
        },
        {
          "id": 150,
          "name": "mewtwo",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
        },
        {
          "id": 151,
          "name": "mew",
          "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
        }
      ]
      );
    });
};