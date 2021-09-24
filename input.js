let connection;

const setupInput = function (servconn) {
    connection = servconn;
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
    //console.log("got: "+ key);
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      process.exit(); 
    } else if (key === 'w') {
      //  console.log("Move: up");
        connection.write('Move: up');
    
    } else if (key === 'a') {
     //   console.log("Move: left");
        connection.write('Move: left');
    } else if (key === 's') {
       // console.log("Move: down");
        connection.write('Move: down');
    } else if (key === 'd') {
     //   console.log("Move: right");
        connection.write('Move: right');
    } else if (key === 'm') {
        //   console.log("Move: right");
           connection.write('Say: Hola!');
    } else {
        console.log("Got: " + key);
    }
  };

  module.exports = {
    setupInput, 
};