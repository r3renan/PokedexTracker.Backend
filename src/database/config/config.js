module.exports = {
    development: {
        username: "pokedex_admin",
        password: "secret123",
        database: "pokedex_development",
        host: "127.0.0.1",
        dialect: "postgres",
        logging: false,
    },
    test: {
        username: "pokedex_admin",
        password: "secret123",
        database: "pokedex_test",
        host: "127.0.0.1",
        dialect: "postgres",
        logging: false,
    },
    production: {
        username: "pokedex_admin",
        password: "secret123",
        database: "pokedex_production",
        host: "127.0.0.1",
        dialect: "postgres",
        logging: false,
    },
};
