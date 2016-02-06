// Description:
//   Bot listens for various messages
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   rng - rng gif
//   

module.exports = function(robot) {
	robot.hear(/rng/i, function(msg) {
		msg.send('http://i.imgur.com/iaSznI5.gif');
	});
}