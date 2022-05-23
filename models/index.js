const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME, // Ej: hack_academy_db
  process.env.DB_USER, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_DIALECT, // Ej: mysql
    port: process.env.DB_PORT,
    logging: false, // Para que no aparezcan mensajes en consola.
  }
);

const Author = require("./Author")(sequelize, Model, DataTypes);
const Comment = require("./Comment")(sequelize, Model, DataTypes);
const Article = require("./Article")(sequelize, Model, DataTypes);

// Luego de definir los modelos, se pueden establecer relaciones
// entre los mismos...
Author.hasMany(Article);
Article.belongsTo(Author);

Article.hasMany(Comment);
Comment.belongsTo(Article);

module.exports = {
  sequelize,
  Author,
  Comment,
  Article,
};
