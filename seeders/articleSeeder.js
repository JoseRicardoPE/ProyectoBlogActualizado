const { faker } = require("@faker-js/faker");
const { Article } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const articles = [];

  for (let i = 0; i < 10; i++) {
    articles.push({
      title: faker.lorem.words(6),
      content: faker.lorem.paragraphs(3),
      image: faker.image.abstract(),
      createDate: faker.date.between("2018-01-01", "2022-05-01"),
      authorId: faker.datatype.number({'min': 1, 'max': 5}),
    });
  }

  await Article.bulkCreate(articles);
};
