module.exports = (sequelize, Model, DataTypes) => {
  class Comment extends Model {}

  Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.TEXT,
      },
      createDate: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "comment",
    }
  );

  return Comment;
};
