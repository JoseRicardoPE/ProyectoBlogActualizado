const { Article, Author, Comment } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

  registerPostNewAuthor: async (req, res) => {
    const [ user, created ] = await Author.findOrCreate({
      where: { email: req.body.email },
      defaults: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: await bcrypt.hash(req.body.password, 10),
      },
    });
    // console.log(req);
    if (created) {
      req.login(user, () => {
        res.redirect("/login");
      });
    } else {
      res.send("¡El usuario ya se encuentra registrado!");
    }
  },

  logOut: async (req, res) => {
    req.logout();
    res.redirect("/");
  }
};

module.exports = pagesController;
