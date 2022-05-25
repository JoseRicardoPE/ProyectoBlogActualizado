module.exports = (sequelize, Model, DataTypes) => {
  class Role extends Model {}

  Role.init(
    {
      /* id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      }, */
      role: {
        type: DataTypes.STRING,
      },
      canComment: {
        type: DataTypes.BOOLEAN,
      },
      canCrudOwnArticles: {
        type: DataTypes.BOOLEAN,
      },
      canCruAllArticles: {
        type: DataTypes.BOOLEAN,
      },
      canCrudAllComments: {
        type: DataTypes.BOOLEAN,
      },
      admin: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "role",
    }
  );

  return Role;
};
