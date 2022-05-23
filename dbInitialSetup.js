const db = require("./models");

module.exports = async () => {
  // Crear tablas:
  await db.sequelize.sync({ force: true });
  console.log("[Database] ¡Las tablas fueron creadas!");

  // Ejecutar seeders (datos de prueba):
  await require("./seeders/authorSeeder")();
  console.log("[Database] Los autores fueron insertados");

  await require("./seeders/articleSeeder")();
  console.log("[Database] Los artículos fueron insertados");

  await require("./seeders/commentSeeder")();
  console.log("[Database] Los comentarios fueron insertados");
};
