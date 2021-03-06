const net = require("net");
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Connected to Server!');
  })

  conn.on('connect', () => {
    conn.write('Name: DP');
  })

  conn.on('data', (data) => {
    console.log('Message from server:', data);
  })

  return conn;
};

//exports connect function
module.exports = {
  connect
}