const models = require("../database/models");
const User = models.User;

module.exports = {
    async createUser(req, res) {
        if (await User.findOne({ where: { email: req.body.email } })) {
            return res.send("This email is being used by another account.");
        }
        const user = await User.findOrCreate({
            where: { name: req.body.username },
            defaults: req.body,
        });
        return user[1] ? res.json(user[0]) : res.send("Username unavailable");
    },

    async findUser(req, res) {
        const user = await User.findOne({
            where: { name: req.params.username },
            attributes: { exclude: ["password"] },
            include: [{ association: "pokemons", through: { attributes: [] } }],
        });
        return res.json(user);
    },
};
