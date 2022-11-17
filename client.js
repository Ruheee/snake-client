const net = require("net");
const { IP, PORT } = require("./constants");

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
    conn.write("Name: Rui")// sending name
    conn.write("Say: LOLOL")
    console.log("Successfully connected to game server")
    // conn.write("Move: up")
  })
  

  conn.setEncoding("utf8");
  return conn;
}

module.exports = {
  connect
};