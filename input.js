const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
   /*
    stdin.on("data", (key) => {
      console.log("calling cb");
      callback(key);
  
    });
    */
    return stdin;
  };
  
  const handleUserInput = function (key) {
    // your code here
    console.log("got: "+ key);
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit(); 
    }
  };

  module.exports = {
    setupInput, 
};