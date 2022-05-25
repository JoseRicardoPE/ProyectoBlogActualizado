const { Role } = require("../models");

module.exports = async () => {
  const roles = [];

  roles.push({
    role: "Reader",
    canComment: 1,
    canCrudOwnArticles: 0,
    canCruAllArticles: 0,
    canCrudAllComments: 0,
    admin: 0,
  });

  roles.push({
    role: "Writer",
    canComment: 1,
    canCrudOwnArticles: 1,
    canCruAllArticles: 0,
    canCrudAllComments: 0,
    admin: 0,
  });

  roles.push({
    role: "Editor",
    canComment: 1,
    canCrudOwnArticles: 1,
    canCruAllArticles: 1,
    canCrudAllComments: 1,
    admin: 0,
  });

  roles.push({
    role: "Admin",
    canComment: 1,
    canCrudOwnArticles: 1,
    canCruAllArticles: 1,
    canCrudAllComments: 1,
    admin: 1,
  });

  await Role.bulkCreate(roles);
};
