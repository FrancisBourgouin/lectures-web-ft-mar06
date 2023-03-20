// HTTP Server w/ Routing
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
  "/users/1": someUser1,
  "/users/2": someUser2,
};

const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);

  const statusCode = users[request.url] ? 200 : 404;
  const payload = users[request.url]
    ? users[request.url]
    : "THIS IS NOT A VALID URL";

  response.writeHead(statusCode, { "Content-Type": "text/json" });

  response.write(JSON.stringify(payload));
  response.end();
});

// const server = http.createServer((request, response) => {
//   console.log(request.url);

//   // Eject clause first
//   if (request.url !== "/users/1" && request.url !== "/users/2") {
//     response.writeHead(404, { "Content-Type": "text/html" });
//     const payload = "THIS IS NOT A VALID URL";
//     response.write(payload);
//     return response.end();
//   }

//   response.writeHead(200, { "Content-Type": "text/json" });

//   let payload = "";

//   if (request.url === "/users/1") {
//     payload = JSON.stringify(someUser1);
//   }
//   if (request.url === "/users/2") {
//     payload = JSON.stringify(someUser2);
//   }
//   response.write(payload);
//   response.end();
// });

// const server = http.createServer((request, response) => {
//   console.log(request.url);

//   if (request.url === "/users/1") {
//     response.writeHead(200, { "Content-Type": "text/json" });
//     const payload = JSON.stringify(someUser1);
//     response.write(payload);
//     response.end();
//   } else if (request.url === "/users/2") {
//     response.writeHead(200, { "Content-Type": "text/json" });
//     const payload = JSON.stringify(someUser2);
//     response.write(payload);
//     response.end();
//   } else {
//     response.writeHead(404, { "Content-Type": "text/html" });
//     const payload = "THIS IS NOT A VALID URL";
//     response.write(payload);
//     response.end();
//   }
// });

server.listen(8080);
