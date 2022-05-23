const express = require("express");
const passport = require("passport");
const publicRouter = express.Router();
const pagesController = require("../controllers/pagesController");

publicRouter.use(express.urlencoded({ extended: true }));

// Rutas Públicas.
publicRouter.get("/", pagesController.showHome);

publicRouter.get("/article/:id", pagesController.showArticle);

publicRouter.get("/contact", pagesController.showContact);

publicRouter.get("/about", pagesController.showAboutUs);

publicRouter.get("/login", pagesController.showLogin);

publicRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/login",
  })
);

publicRouter.get("/register", pagesController.showRegister);

publicRouter.post("/register", pagesController.registerPostNewAuthor);

publicRouter.get("/logout", pagesController.logOut); 

module.exports = publicRouter;
