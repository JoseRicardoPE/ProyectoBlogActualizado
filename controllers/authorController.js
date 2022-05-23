// Subir editar y eliminar artículos los admin
const { Article, Author, Comment } = require('../models');

const adminController = {
  showHomeAdmin: async (req, res) => {
    const articles = await Article.findAll();
    res.render('admin', { articles });
  },

  showNewArticle: async (req, res) => {
    await res.render('newArticle');
  },

  postNewArticle: async (req, res) => {
    const id = req.params.id;
    const newArticle = req.body;
    await Article.create(newArticle, { where: id });
    res.redirect('/admin');
  },

  showEditArticle: async (req, res) => {
    const articleIndividual = await Article.findByPk(req.params.id);
    const { title, content, image, createDate, authorId } = req.body;
    await Article.update(
      { title, content, image, createDate, authorId },
      { where: { id: req.params.id } }
    );
    res.render('editArticle', { articleIndividual });
  },

  putEditArticle: async (req, res) => {
    const { title, content, image, createDate } = req.body;
    await Article.update(
      { title, content, image, createDate },
      { where: { id: req.params.id } }
    );
    res.redirect('/admin');
  },

  deleteArticle: async (req, res) => {
    const id = req.params.id;
    await Article.destroy({ where: { id } });
    res.redirect('/admin');
  },
};

module.exports = adminController;
