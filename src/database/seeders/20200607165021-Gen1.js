"use strict";
const getData = require("../../services/getData");

module.exports = {
    async up(queryInterface, Sequelize) {
        for (let i = 1; i <= 151; i++) {
            console.log(`Fetching info from PokeAPI about Pokemon No ${i}`);
            await getData.byName(i);
        }
    },

    down: (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    },
};
