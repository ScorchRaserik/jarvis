// Description:
//   Bot says hello
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot say hello - Hello!

module.exports = function(robot) {
  robot.respond(/say hello/i, function(msg) {
    msg.send('Hello, sir');
  });
};