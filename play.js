const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541 
  });

  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data)

  });

  conn.setEncoding("utf8");

  return conn;
}

console.log("Connecting ...");
connect();