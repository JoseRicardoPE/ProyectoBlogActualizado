const { Article, Author, Comment } = require("../models");

const apiController = {
    showArticle: async (req, res) => {
        const articleId = req.params.id;
        const articleIndividual = await Article.findByPk(articleId, {
          include: [Author, Comment],
        });
        res.json( { articleIndividual });
      },
};

module.exports = apiController;
