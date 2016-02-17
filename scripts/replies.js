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
//   thank you, jarvis - you're welcome

module.exports = function(robot) {
	robot.hear(/rng/i, function(msg) {
		msg.send('http://i.imgur.com/iaSznI5.gif');
	});
	
	robot.hear(/(?:thank you|thanks|ty|thx|thnx|tyvm)(?: very much)?(?:,)? (.*)/i, function(msg){
		responses = [
			"My pleasure",
			"Not a problem",
			"Of course",
			"You're welcome",
			"You're quite welcome",
			"I live to serve",
			"It's my pleasure",
			"It's no bother",
			"Not at all",
			"Don't mention it"
		];
		randomNum = Math.floor(Math.random() * (responses.length - 1));
		console.log(robot.name);
		if(msg.match[1].toLowerCase() == robot.name.toLowerCase()){
			msg.send(responses[randomNum] + ', sir');
		}
	});
	
	robot.hear(/(?:congrats|congratz|grats|gratz|congratulations)(?:,)? (......)/i, function(msg){
		if(msg.match[1].toLowerCase() == robot.name.toLowerCase()){
			msg.send("Thank you, sir, it's an honor");
		}
	});
	
	robot.respond(/(?:congrats|congratz|grats|gratz|congratulations)(?:!|\.)/i, function(msg){
		msg.send("Thank you, sir, it's an honor");
	});
}