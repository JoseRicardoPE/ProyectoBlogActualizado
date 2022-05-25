require("dotenv").config();

const express = require("express");
const session = require("express-session");
const methodOverride = require("method-override");
const dbInitialSetup = require("./dbInitialSetup");
const app = express();
const flash = require("connect-flash");
const port = 3000;

const routes = require("./routes/routes");
const passport = require("./passport");

app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(flash());

app.use(
  session({
    secret: process.env.DB_SESSIONSECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Lo hago parte de las variables locales
app.use((req, res, next) => {
  res.locals.mensajes = req.flash();
  next();
});

passport(app);

routes(app);

// dbInitialSetup();

app.listen(port, () => {
  console.log(`http://localhost:${port} Server listening on port ${port}`);
});
