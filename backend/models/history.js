module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define("History", {
    searchedItem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.Date,
      defaultValue: DataTypes.NOW,
    },
  });
  return History;
};
