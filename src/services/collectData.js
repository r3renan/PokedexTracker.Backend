const api = require("./apiMethods");

module.exports = {
    async collectData(req, res) {
        const { generation } = req.params;
        switch (generation) {
            case "1":
                for (let i = 1; i <= 151; i++) {
                    await api.getPokemon(i);
                }
                break;
            case "2":
                for (let i = 152; i <= 251; i++) {
                    await api.getPokemon(i);
                }
                break;
            case "3":
                for (let i = 252; i <= 386; i++) {
                    await api.getPokemon(i);
                }
                break;
        }
        return res.send("done");
    },
};
