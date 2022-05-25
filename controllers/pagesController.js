const { Article, Author, Comment } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../auth");
const passport = require("../passport");

const pagesController = {
  showHome: async (req, res) => {
    const articles = await Article.findAll(
      { include: Author },
      { order: [["createDate", "ASC"]] }
    );
    res.render("home", { articles });
  },

  showArticle: async (req, res) => {
    const articleId = req.params.id;
    const articleIndividual = await Article.findByPk(articleId, {
      include: [Author, Comment],
    });
    res.render("article", { articleIndividual });
  },

  showContact: async (req, res) => {
    await res.render("contact");
  },

  showAboutUs: async (req, res) => {
    await res.render("aboutUs");
  },

  // Otros handlers...
  // Login y Register
  showLogin: async (req, res) => {
    await res.render("login");
  },

  showRegister: async (req, res) => {
    await res.render("register");
  },

  registerNewAuthor(req, res) {
    const password = bcrypt.hashSync(
      req.body.password,
      Number(authConfig.rounds)
    );
    // Crear usuario
    Author.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: password,
    })
      .then((author) => {
        // Despúes de crear el usuario, creamos el token.
        const token = jwt.sign({ author: author }, authConfig.secret, {
          expiresIn: authConfig.expires,
        });
        res.redirect("/login", { token });
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },

  logOut: async (req, res) => {
    await req.session.destroy(() => {
      res.redirect("/login");
    });
  },
};

module.exports = pagesController;
