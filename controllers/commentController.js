// Para que los usuarios y los admin suban los comentarios
const { Article, Author, Comment } = require("../models");

const commentController = {
  postNewComment: async (req, res) => {
    req.body.articleId = req.params.id;
    const newComment = req.body;
    await Comment.create(newComment);
    res.redirect("/");
  },
};

// Otros handlers...
// ...

module.exports = commentController;
