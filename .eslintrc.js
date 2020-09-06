module.exports = {
    env: {
        commonjs: true,
        es2020: true,
        node: true,
    },
    extends: ["airbnb-base", "plugin:prettier/recommended"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
        "import/prefer-default-export": "off",
        "no-plusplus": "off",
    },
};
