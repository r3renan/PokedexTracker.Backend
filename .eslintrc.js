module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
        node: true,
    },
    plugins: ["prettier", "json"],
    extends: ["plugin:prettier/recommended", "plugin:json/recommended"],
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
        "json/*": ["error", "allowComments"],
        "prettier/prettier": "error",
    },
};
