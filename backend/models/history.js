const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class History extends Model {}

  History.init(
    {
      item: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize, // Pass the Sequelize instance
      modelName: "History", // Name of the model
      tableName: "histories", // Optional: specify a custom table name
      timestamps: true, // Enable createdAt and updatedAt timestamps
    }
  );

  return History;
};
