const express = require("express");
const apiRouter = express.Router();
const apiController = require("../controllers/apiController");
const checkJwt = require("express-jwt");
const authConfig = require("../auth");

// Rutas API's
apiRouter.get(
  "/prueba/:id",
  checkJwt({ secret: authConfig.secret, algorithms: ["HS256"] }),
  async (req, res) => {
    const articleId = req.params.id;
    const articleIndividual = await Article.findByPk(articleId, {
      include: [Author, Comment],
    });
    res.json({ articleIndividual });
  }
);

module.exports = apiRouter;
