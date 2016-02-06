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
			output = false;
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
	t2d:["Rotation A:", "Soma Prime Blueprint", "Orthos Prime Blade", "Rotation B:", "Burston Prime Stock", "Paris Prime Blueprint", "Rotation C:", "Fang Prime Handle", "Braton Prime Stock", "Lex Prime Receiver", "Paris Prime Upper Limb", "Fang Prime Blueprint"],
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
	t1srv:["WIP"],
	t2srv:["WIP"],
	t3srv:["WIP"],
	t4srv:["WIP"],
}

module.exports = function(robot) {
  robot.respond(/what(?:')?s in (.*)/i, function(msg) {
	if(msg.match[1] = "t1s" || msg.match[1] = "t2s" || msg.match[1] = "t3s" || msg.match[1] = "t4s"){
		string = "Which one, sir? Sabotage (t#sab) or Survival (t#srv)?"
	}
	else if(!determineTower(msg.match[1])){
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
	var match = false;
	var string = "As of U18.4.8:\n";
	for(var key in tables){
		// skip loop if the property is from prototype
		if (!tables.hasOwnProperty(key)) continue;
		
		for(var i = 0; i < tables[key].length; i++){
			var item = tables[key][i];
			var result = item.match(new RegExp(msg.match[1], "i"));
			
			//if there's a match, print
			if(result){
				match = true;
				string += item + " - " + key;
				//if it's defense, interception, or survival, check rotation
				if(key == "ods" || key == "odd"){
					string += ", rot C\n";
				}
				else if(key == "t1d" || key == "t2d" || key == "t3d" || key == "t4d" || key == "t1i" || key == "t1surv" || key == "t2surv" || key == "t3surv" || key == "t4surv"){
					console.log("rotation found")
					var rotationFound = false;
					for(var j = i; j >= 0 && !rotationFound; j--){
						var item = tables[key][j];
						if(item == "Rotation C:"){
							string += ", rot C\n";
							rotationFound = true;
						}
						else if(item == "Rotation B:"){
							string += ", rot B\n";
							rotationFound = true;
						}
						else if(item == "Rotation A:"){
							string += ", rot A\n";
							rotationFound = true;
						}
					}
				}
				//if not, just end line
				else{
					string += "\n";
				}
			}
		}
	}
	if(!match){
		string = "Apologies, sir, this feature is currently a work in progress";
	}
	
	msg.send(string);
  });
};