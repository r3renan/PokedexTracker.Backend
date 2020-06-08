"use strict";
const seeder = require("../../services/seeder");

module.exports = {
    async up(queryInterface, Sequelize) {
        for (let i = 252; i <= 386; i++) {
            await seeder.getData(i);
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
