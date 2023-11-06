module.exports = (DataTypes, connection) => {
  const Service = connection.define("Service", {
    destination: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    CarId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Service;
};
