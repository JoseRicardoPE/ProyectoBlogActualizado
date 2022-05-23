const { faker } = require("@faker-js/faker");
const { Comment } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const comments = [];

  for (let i = 0; i < 20; i++) {
    comments.push({
      title: faker.lorem.words(5),
      content: faker.lorem.paragraphs(3),
      createDate: faker.date.between("2018-01-01", "2022-05-01"),
      authorId: faker.datatype.number({ min: 1, max: 5 }),
      articleId: faker.datatype.number({ min: 1, max: 10 }),
    });
  }

  await Comment.bulkCreate(comments);
};
