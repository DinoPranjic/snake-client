const { stdin } = require('process');
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
  } else if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  }
}

stdin.on('data', handleUserInput);

module.exports = {
  setupInput
}