// Basic express server wo/ EJS
const someUser1 = {
  name: "Pequeno Pollo de la Pampa",
  age: "secret",
  location: "Pampa, duh",
};

const someUser2 = {
  name: "Gordo Pollo de la Pampa",
  age: 9001,
  location: "On a trip to Antartica",
};

const users = {
  1: someUser1,
  2: someUser2,
};

const htmlString = `
<h1>SOME TITLE !</h1>
<p>Some text in a paragraph oh it's so great.</p>
`;

const express = require("express");

const server = express(); // Equivalent of running http.createServer
server.use(express.static("public"));
server.set("view engine", "ejs");

// HTTP METHODS
// GET : Client will senda GET request when they ask for information / data
// POST : Client will send a POST request when they want to POST data
// PUT : Client will send a PUT request when they want to update something
// DELETE : Client will send DELETE request when they want to delete / remove something

// Events! Emit an event or Receive / listen to an event

server.get("/", (req, res) => {
  res.send(htmlString);
});

// :something is a wildcard (placeholder)
// is part of the parameters of the request
// it's accessible through the request object
server.get("/users/:userId", (req, res) => {
  const { userId } = req.params;

  if (!users[userId]) {
    return res.send("THAT AINT A USER!");
  }

  const { name, age, location } = users[userId];

  const templateVars = { name, age, location };

  res.render("user", templateVars);
});
// server.get("/users/:userId", (req, res) => {
//   res.json(users[req.params.userId]);
// });

// What to do in the event of receing a get request with /users/1 as the url
// server.get("/users/1", (req, res) => {
//   res.json(someUser1);
// });

// server.get("/users/2", (req, res) => {
//   res.json(someUser2);
// });

server.listen(8080);
