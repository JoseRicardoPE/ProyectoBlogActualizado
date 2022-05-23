require("dotenv").config();

const express = require("express");
const session = require("express-session");
const methodOverride = require("method-override");
const app = express();
const flash = require("express-flash");
const port = 3000;

const dbInitialSetup = require("./dbInitialSetup");
const logger = require("./middlewares/logger");
const routes = require("./routes/routes");
const passport = require("./passport");

app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(logger);
app.use(express.json());

app.use(
  session({
    secret: process.env.DB_SESSIONSECRET,
    resave: false,
    saveUninitialized: false,
  })
);

passport(app);

routes(app);

// dbInitialSetup();

app.listen(port, () => {
  console.log(`http://localhost:${port} Server listening on port ${port}`);
});
