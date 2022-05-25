const { faker } = require("@faker-js/faker");
const { Author } = require("../models");
const bcrypt = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {
  const author = [];

  for (let i = 0; i < 5; i++) {
    author.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: await bcrypt.hash("1234", 10),
    });
  }

  await Author.bulkCreate(author);
};
