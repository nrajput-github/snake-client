//const net = require("net");

const { connect } = require("./client.js");
console.log("Connecting ...");
connect();

const setupInput = function (callback) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
 // stdin.on("data", handleUserInput);
  stdin.on("data", (key) => {
    console.log("calling cb");
    callback(key);

  });
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  console.log("inHandle");
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit(); 
  }
};

setupInput(handleUserInput);