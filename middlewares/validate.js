const validate = {};

validate.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("/login");
};

// Middleware para que el objeto user quede disponible en todas las vistas:
validate.makeUserAvailableInViews = (req, res, next) => {
  res.locals.user = req.user;
  next();
};

module.exports = validate;
