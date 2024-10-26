"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Histories", [
      {
        searchedItem: "pizza",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        searchedItem: "japan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        searchedItem: "ramen",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("History", null, {});
  },
};
