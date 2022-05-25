module.exports = (sequelize, Model, DataTypes) => {
  class Author extends Model {}

  Author.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      /* roleID: {
        type: DataTypes.INTEGER,
      }, */
    },
    {
      sequelize,
      modelName: "author",
    }
  );
  return Author;
};
