const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
};

const handleUserInput = (key) => { // event listening for stdin that runs when you recieve input from your keyboard
  // your code here
  if (key === '\u0003') {
    console.log("Exited")
    process.exit();
  }
  if (key === "w") {
    console.log('move up')
  }
};

module.exports = {
  setupInput
}