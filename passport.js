const passport = require("passport");
const localStrategy = require("passport-local");
const bcrypt = require("bcryptjs");
const { Article, Author, Comment } = require("./models");

module.exports = function (app) {
  app.use(passport.session());

  passport.use(
    new localStrategy(
      {
        usernameField: "email",
      },
      async function verify(email, password, cb) {
        const authorLog = await Author.findOne({ where: { email: email } });
        if (!authorLog) {
          return cb(null, false, { message: "Incorrect username or password" });
        }
        const comparePass = await bcrypt.compare(password, authorLog.password);
        if (comparePass) {
          return cb(null, authorLog);
        }
        return cb(null, false, { message: "Incorrect username or password" });
      }
    )
  );

  passport.serializeUser((authorLog, done) => {
    done(null, authorLog.id);
  });

  passport.deserializeUser( (id, done) => {
      Author.findByPk(id)
      .then((user) => {
          done(null, user);
      })
      .catch((err) => {
          done(err, user);
      })
  })
};
