const { connect } = require('./client');
const { setupInput } = require('./input')

console.log("Connecting ...");
//assinging object returned by connect to "connection"
const connection = connect();
//passing that object to setUpInput
setupInput(connection);