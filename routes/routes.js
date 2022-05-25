const publicRoutes = require("./publicRoutes");
const adminRoutes = require("./adminRoutes");
const commentRoutes = require("./commentRoutes");
const apiRoutes = require("./apiRoutes");
const { makeUserAvailableInViews } = require("../middlewares/validate");

module.exports = (app) => {
  app.use(makeUserAvailableInViews);
  app.use(publicRoutes);
  app.use(commentRoutes);
  app.use("/api", apiRoutes);
  app.use("/admin", adminRoutes);
};
