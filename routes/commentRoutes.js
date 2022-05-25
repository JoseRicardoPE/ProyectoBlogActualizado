const express = require("express");
const commentRouter = express.Router();
const commentController = require("../controllers/commentController");

// Rutas de los Comments:
commentRouter.post("/create/:id", commentController.postNewComment);

module.exports = commentRouter;
