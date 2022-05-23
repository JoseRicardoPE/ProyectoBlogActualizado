const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/authorController");
const { isAuthenticated } = require("../middlewares/validate");

// Rutas del Admin:

// Middleware para blindar las rutas del admin
adminRouter.use(isAuthenticated);

adminRouter.get("/", adminController.showHomeAdmin);

adminRouter.get("/newArticle", adminController.showNewArticle);

adminRouter.post("/create", adminController.postNewArticle);

adminRouter.get("/article/:id", adminController.showEditArticle);

adminRouter.put("/article/:id", adminController.putEditArticle);

adminRouter.delete("/delete/:id", adminController.deleteArticle);

module.exports = adminRouter;
