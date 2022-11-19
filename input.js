let connection;
const { msg } = require('./constants');

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (data) => { // event listening for stdin that runs when you recieve input from your keyboard
  // your code here
  if (data === '\u0003') {
    console.log("Exited");
    process.exit();
  }
  
  connection.write(msg[data]);
};

module.exports = {
  setupInput,
};