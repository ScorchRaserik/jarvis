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
		case "t2c":
		case "tower 2 capture":
		case "tower ii capture":
			output = "t2c";
			break;
		case "t3c":
		case "tower 3 capture":
		case "tower iii capture":
			output = "t3c";
			break;
		case "t4c":
		case "tower 4 capture":
		case "tower iv capture":
			output = "t4c";
			break;
		case "t1d":
			output = "t1d";
			break;
		case "t2d":
			output = "t2d";
			break;
		case "t3d":
			output = "t3d";
			break;
		case "t4d":
			output = "t4d";
			break;
		case "t1e":
			output = "t1e";
			break;
		case "t2e":
			output = "t2e";
			break;
		case "t3e":
			output = "t3e";
			break;
		case "t4e":
			output = "t4e";
			break;
		case "t4i":
			output = "t4i";
			break;
		case "t1md":
			output = "t1md";
			break;
		case "t2md":
			output = "t2md";
			break;
		case "t3md":
			output = "t3md";
			break;
		case "t4md":
			output = "t4md";
			break;
		case "t1sab":
			output = "t1sab";
			break;
		case "t2sab":
			output = "t2sab";
			break;
		case "t3sab":
			output = "t3sab";
			break;
		case "t4sab":
			output = "t4sab";
			break;
		case "t1srv":
		case "t1surv":
			output = "t1srv";
			break;
		case "t2srv":
		case "t2surv":
			output = "t2srv";
			break;
		case "t3srv":
		case "t3surv":
			output = "t3srv";
			break;
		case "t4srv":
		case "t4surv":
			output = "t4srv";
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
	t2c:["Orthos Prime Handle", "Paris Prime String", "Forma Blueprint", "Orthos Prime Blade", "Volt Prime Blueprint", "Nyx Prime Blueprint", "Loki Prime Blueprint"],
	t3c:["Bronco Prime Barrel", "Forma Blueprint", "Bronco Prime Receiver", "Dual Kamas Prime Blade", "Akbronco Prime Link", "Burston Prime Barrel", "Lex Prime Barrel"],
	t4c:["Nyx Prime Systems", "Forma Blueprint", "Bronco Prime Receiver", "Volt Prime Blueprint", "Akbronco Prime Link"],
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
	if(msg.match[1] == "t1s" || msg.match[1] == "t2s" || msg.match[1] == "t3s" || msg.match[1] == "t4s"){
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
		string = "Apologies, sir, I couldn't find" + msg.match[1] + ".  I'm only programmed for the Void drop tables.";
	}
	
	msg.send(string);
  });
};