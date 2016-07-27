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
//   hubot where is <item> - Tells where void and archwing items are
//   hubot what's in <mission> - Tells where void items are
//   hubot what's in archwing <planet/mission> - Tells where archwing missions are

function determineInput(input){
	switch(input.toLowerCase()){
        //Relic Locations
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
        case "earth cervantes":
        case "earth, cervantes":
        case "cervantes":
            output = "earthcerv";
            break;
            
        //Relic Contents
		case "lith a1":
		case "la1":
			output = "la1";
			break;
        case "lith f1":
        case "lf1":
            output = "lf1";
            break;
        
        //Archwing
		case "steel meridian":
		case "sm":
			output = "sm";
			break;
		case "arbiters of hexis":
		case "aoh":
			output = "aoh";
			break;
		case "cephalon suda":
		case "cs":
		case "teflon soda":
			output = "cd";
			break;
		case "perrin sequence":
		case "ps":
			output = "ps";
			break;
		case "red veil":
		case "rv":
			output = "rv";
			break;
		case "new loka":
		case "nl":
			output = "nl";
			break;
		default:
			output = false;
			break;
	}
	return output;
}

var tables = {
    //Relic locations
    //Orokin Derelicts need rotations, everything else does not
	odd: ["*Rotation A*", "Lith F1 (LF1)"],
	ods: ["*Rotation A*", "Lith A1 (LA1)", "Meso B1 (MB1)", "*Rotation B*", "Neo D1 (ND1)", "Neo V1 (NV1)", "*Rotation C*", "Axi A1 (AA1)", "Axi N2 (AN2)"],
    earthcerv: ["Lith A1 (LA1)", "Lith F1 (LF1)", "Lith F2 (LF2)", "Lith M1 (LM1)", "Lith S1 (LS1)", "Lith S2 (LS2)", "Lith V1 (LV1)"],
    
    //Relic contents
	la1: ["*Common*", "Braton Prime Barrel", "Vasto Prime Receiver", "*Uncommon*", "Saryn Prime Neuroptics", "Vectis Prime Blueprint", "*Rare*", "Akstiletto Prime Blueprint"],
    lf1: ["*Common*", "*Uncommon*", "*Rare*",],
	
    //Archwing
    sm: ["Kaszas Handle", "Velocitus Receiver", "Corvas Stock", "Agkuza Guard", "Fluctus Stock"],
    aoh: ["Dual Decurion Barrel", "Phaedra Barrel", "Corvas Barrel", "Cyngas Barrel", "Centaur Aegis"],
}

module.exports = function(robot) {
  robot.respond(/what(?:')?s in (.*)/i, function(msg) {
	else if(!determineInput(msg.match[1])){
		string = "I couldn't find " + msg.match[1] + ", sir."
    }
	else{
		string = "As of Update: Specters of the Rail - Hotfix 13:\n";
		for(var i = 0; i < tables[determineInput(msg.match[1])].length; i++){
			string += tables[determineInput(msg.match[1])][i] + "\n";
		}
	}
	msg.send(string);
  });
  
  robot.respond(/where is (.*)/i, function(msg) {
	var match = false;
	var string = "As of Update: Specters of the Rail - Hotfix 13:\n";
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
				//check rotation/rarity
				if(tables[key][0].substring(0) == "*"){
					var rotationFound = false;
					for(var j = i; j >= 0 && !rotationFound; j--){
						var item = tables[key][j];
						if(item == "*Rare*"){
							string += ", *rare*\n";
							rotationFound = true;
						}
						else if(item == "*uncommon*"){
							string += ", *uncommon*\n";
							rotationFound = true;
						}
						else if(item == "*common*"){
							string += ", *common\n";
							rotationFound = true;
						}
                        else if(item =="*Rotation A*"){
                            string += ", *rotation A (first two waves)\n";
							rotationFound = true;
                        }
                        else if(item =="*Rotation B*"){
                            string += ", *rotation B (every third out of four waves)\n";
							rotationFound = true;
                        }
                        else if(item =="*Rotation C*"){
                            string += ", *rotation C (every fourth wave)\n";
							rotationFound = true;
                        }
					}
				}
				//add check for mission type for relic locations
				
				//if no rotation, end line
				else{
					string += "\n";
				}
			}
		}
	}
	if(!match){
		string = "Apologies, sir, I couldn't find " + msg.match[1] + ".  I can only find prime or archwing parts.";
	}
	else{
		string = string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}
	
	msg.send(string);
  });
};
