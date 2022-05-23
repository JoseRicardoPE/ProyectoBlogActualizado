const { faker } = require("@faker-js/faker");
const { Author } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const author = [];

  for (let i = 0; i < 5; i++) {
    author.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
    });
  }

  await Author.bulkCreate(author);
};
