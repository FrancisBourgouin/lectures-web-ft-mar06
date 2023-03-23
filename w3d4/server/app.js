require("dotenv").config();
const express = require("express"); // Requires Express Framework (Routing / Server)
const path = require("path"); // Requires Path (Multiple OS path support)
const logger = require("morgan"); // Require Morgan (Logs the requests received)
const cookieParser = require("cookie-parser"); // Require Cookie Parser (Parse string to cookie)
const cookieSession = require("cookie-session");

const app = express(); // Create an express server and reference with app
// view engine setup
app.set("views", path.join(__dirname, "views")); // Where the views are
app.set("view engine", "ejs"); // The rendering engine will be EJS

// Middlewares
app.use(logger("dev")); // Logs, always triggered
app.use(express.json()); // Parse incoming body (POST / PUT)
app.use(express.urlencoded({ extended: false })); // Parse incoming body (POST / PUT)
app.use(cookieParser()); // Parse cookie values, always triggered
app.use(express.static(path.join(__dirname, "public"))); // Serve static files
app.use(
  cookieSession({
    name: "session",
    keys: ["I like potatoes with gravy and cheese"],
  })
);

const { authenticateUser, fetchUserByEmail } = require("./helpers/userHelpers");

app.get("/", (req, res) => {
  return res.render("index");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // const email = req.body.email;
  // const password = req.body.password;

  const { err, user } = authenticateUser(email, password);

  if (err) {
    console.log(err);
    res.redirect("/");
  }

  req.session.email = user.email;

  // res.cookie("email", user.email);
  return res.redirect("/secret");
});

app.get("/secret", (req, res) => {
  const { email } = req.session;

  const { err, user } = fetchUserByEmail(email);

  if (err) {
    return res.redirect("/");
  }

  const templateVars = {
    name: user.name,
    secret: user.secret,
  };

  return res.render("secret", templateVars);
});

module.exports = app;
