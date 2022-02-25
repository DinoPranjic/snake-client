const { stdin } = require('process');
const { MOVE_KEYS, PLAYER_MSG_KEYS } = require('./constants')
//defining global variable called connection without assigning value
let connection;

const setupInput = function (conn) {
  //reassigning the value of the variable connection to the entire connect object
  //all of its methods now available in global scope
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (MOVE_KEYS[key]) {
    connection.write(MOVE_KEYS[key]);
  } else if (PLAYER_MSG_KEYS[key]) {
    connection.write(PLAYER_MSG_KEYS[key]);
  }
}

stdin.on('data', handleUserInput);

module.exports = {
  setupInput
}