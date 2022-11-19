const net = require("net");
const { IP, PORT, initials } = require("./constants");

const connect = () => {
  const conn = net.createConnection({
    host: IP, 
    port: PORT
  });

  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });

  conn.on("connect", () => {
    conn.write(initials);// sending initials to server from the client
    conn.write("Say: Hello sneks"); // writes "Hello sneks" to the server
    console.log("Successfully connected to game server"); // prints message specifically to the player
    // conn.write("Move: up")
  });
  
  conn.setEncoding("utf8");
  
  return conn;
};

module.exports = {
  connect
};