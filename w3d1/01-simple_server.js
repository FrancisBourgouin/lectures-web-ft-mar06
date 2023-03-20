// Net package vs HTTP package

// Status messages from server:

// 10x : Connected
// 20x : All good (200, 201 created)
// 30x : Redirection!
// 40x : Client fudged up
// 50x : Server fudged up

// JSON : JavaScript Object Notation

const someObject = {
  name: "Pequeno Pollo de la Pampa",
  age: "secret",
  location: "Pampa, duh",
};

const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);

  response.writeHead(200, { "Content-Type": "text/json" });

  const payload = JSON.stringify(someObject);

  response.write(payload);

  response.end();
});

server.listen(8080);

// 127.0.0.1
// 300 Bob Street

// 8080
// App. 5
