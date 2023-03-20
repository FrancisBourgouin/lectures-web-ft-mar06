const net = require("net");

const server = net.createServer((connection) => {
  connection.setEncoding("utf-8");

  connection.on("data", (data) => {
    console.log(data);
  });
});

// Client & Server

// Customer <-> Waiter <-> Cook

// 165.249.x.x

// TCP Connection, UDP

// HTTP / FTP / SSH
