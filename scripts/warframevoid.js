// Description:
//   Bot finds current void drop tables for warframe
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot where is <item>
//   hubot what's in <mission>

function determineTower(input){
	switch(input.toLowerCase()){
		case "odd":
		case "orokin derelict defense":
		case "derelict defense":
			output = "odd";
			break;
		case "ods":
		case "orokin derelict survival":
		case "derelict survival":
			output = "ods";
			break;
		case "t1c":
		case "tower 1 capture":
		case "tower i capture":
			output = "t1c";
			break;
		default:
			output = "false";
			break;
	}
	return output;
}

var tables = {
	odd:["Rotation C:", "Trinity Prime Blueprint", "Dual Kamas Prime Handle", "Soma Prime Stock"],
	ods:["Rotation C:", "Burston Prime Barrel", "Nova Prime Systems Blueprint", "Forma Blueprint"],
	t1c:["Odonata Prime Blueprint", "Paris Prime Grip", "Forma Blueprint", "Ankyros Prime Gauntlet", "Lex Prime Receiver"],
	t2c:["WIP"],
	t3c:["WIP"],
	t4c:["WIP"],
	t1d:["WIP"],
	t2d:["WIP"],
	t3d:["WIP"],
	t4d:["WIP"],
	t1e:["WIP"],
	t2e:["WIP"],
	t3e:["WIP"],
	t4e:["WIP"],
	t4i:["WIP"],
	t1md:["WIP"],
	t2md:["WIP"],
	t3md:["WIP"],
	t4md:["WIP"],
	t1sab:["WIP"],
	t2sab:["WIP"],
	t3sab:["WIP"],
	t4sab:["WIP"],
	t1surv:["WIP"],
	t2surv:["WIP"],
	t3surv:["WIP"],
	t4surv:["WIP"],
}

module.exports = function(robot) {
  robot.respond(/what(?:')?s in (.*)/i, function(msg) {
	if(!determineTower(msg.match[1])){
		string = "I couldn't find " + msg.match[1] + ", sir.  I'm afraid I'm only programmed for the Void drop tables."
    }
	else{
		string = "As of U18.4.8:\n";
		for(var i = 0; i < tables[determineTower(msg.match[1])].length; i++){
			string += tables[determineTower(msg.match[1])][i] + "\n";
		}
	}
	msg.send(string);
  });
  
  robot.respond(/where is (.*)/i, function(msg) {
	msg.send("Apologies, sir, this feature is currently a work in progress");
  });
};