const express = require("express");
const apiRouter = express.Router();
const apiController = require("../controllers/apiController");

// Rutas API's
apiRouter.get("/", apiController.showArticle);

module.exports = apiRouter;
