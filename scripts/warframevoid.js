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
		case "t1sur":
			output = "t1srv";
			break;
		case "t2srv":
		case "t2surv":
		case "t2sur":
			output = "t2srv";
			break;
		case "t3srv":
		case "t3surv":
		case "t3sur":
			output = "t3srv";
			break;
		case "t4srv":
		case "t4surv":
		case "t4sur":
			output = "t4srv";
			break;
		case "archwing mercury":
		case "archwing caduceus":
		case "archwing mercury caduceus":
		case "archwing mercury, caduceus":
			output = "mercury";
			break;
		case "archwing venus":
		case "archwing montes":
		case "archwing venus montes":
		case "archwing venus, montes":
			output = "venus";
			break;
		case "archwing earth":
		case "archwing erpo":
		case "archwing earth erpo":
		case "archwing earth, erpo":
			output = "earth";
			break;
		case "archwing mars":
		case "archwing syrtis":
		case "archwing mars syrtis":
		case "archwing mars, syrtis":
			output = "mars";
			break;
		case "archwing saturn":
		case "archwing pandora":
		case "archwing saturn pandora":
		case "archwing saturn, pandora":
			output = "saturn";
			break;
		case "archwing jupiter":
		case "archwing galilea":
		case "archwing jupiter galilea":
		case "archwing jupiter, galilea":
			output = "jupiter";
			break;
		case "archwing uranus":
		case "archwing caelus":
		case "archwing uranus caelus":
		case "archwing uranus, caelus":
			output = "uranus";
			break;
		case "archwing neptune":
		case "archwing salacia":
		case "archwing neptune salacia":
		case "archwing neptune, salacia":
			output = "neptune";
			break;
		case "archwing eris":
			output = "eris";
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
	t1c:["Odonata Prime Blueprint", "Paris Prime Grip", "Forma Blueprint", "Paris Prime String", "Lex Prime Receiver"],
	t2c:["Orthos Prime Handle", "Paris Prime String", "Forma Blueprint", "Orthos Prime Blade", "Volt Prime Blueprint", "Nyx Prime Blueprint", "Loki Prime Blueprint"],
	t3c:["Nikana Prime Hilt", "Forma Blueprint", "Spira Prime Pouch", "Dual Kamas Prime Blade", "Akbronco Prime Link", "Burston Prime Barrel", "Lex Prime Barrel"],
	t4c:["Nyx Prime Systems", "Forma Blueprint", "Bronco Prime Receiver", "Volt Prime Blueprint", "Akbronco Prime Link"],
	t1d:["Rotation C:", "Vasto Prime Receiver", "Carrier Prime Systems", "Forma Blueprint", "Hikou Prime Stars", "Bo Prime Ornament"],
	t2d:["Rotation A:", "Soma Prime Blueprint", "Orthos Prime Blade", "Rotation B:", "Burston Prime Stock", "Paris Prime Blueprint", "Rotation C:", "Fang Prime Handle", "Braton Prime Stock", "Lex Prime Receiver", "Paris Prime Upper Limb", "Fang Prime Blueprint"],
	t3d:["Rotation A:", "Trinity Prime Chassis Blueprint", "Rotation B:", "Lex Prime Blueprint", "Paris Prime String", "Burston Prime Blueprint", "Rotation C:", "Braton Prime Barrel", "Braton Prime Receiver", "Forma Blueprint", "Ash Prime Blueprint", "Braton Prime Stock", "Bo Prime Blueprint", "Wyrm Prime Cerebrum"],
	t4d:["Rotation A:", "Forma Blueprint", "Lex Prime Blueprint", "Orthos Prime Handle", "Wyrm Prime Systems", "Rotation B:", "Braton Prime Barrel", "Braton Prime Receiver", "Carrier Prime Systems", "Rotation C:", "Loki Prime Systems Blueprint", "Nyx Prime Blueprint", "Trinity Prime Blueprint", "Odonata Prime Blueprint", "Carrier Prime Carapace", "Burston Prime Receiver", "Hikou Prime Pouch"],
	t1e:["Scindo Prime Blueprint", "Wyrm Prime Cerebrum", "Forma Blueprint", "Burston Prime Stock"],
	t2e:["Carrier Prime Cerebrum", "Volt Prime Helmet Blueprint", "Nova Prime Blueprint", "Forma Blueprint", "Saryn Prime Systems Blueprint", "Wyrm Prime Blueprint"],
	t3e:["Nyx Prime Chassis Blueprint", "Soma Prime Stock", "Vasto Prime Receiver", "Saryn Prime Blueprint", "Nikana Prime Blueprint", "Nyx Prime Systems Blueprint"],
	t4e:["Kavasa Prime Collar Buckle", "Forma Blueprint", "Odonata Prime Harness Blueprint", "Hikou Prime Pouch", "Saryn Prime Blueprint", "Vectis Prime Receiver"],
	t4i:["Rotation A:", "Carrier Prime blueprint", "Akbronco Prime Blueprint", "Loki Prime Blueprint", "Rotation B:", "Vectis Prime Barrel", "Hikou Prime Blueprint", "Forma Blueprint", "Rotation C:", "Wyrm Prime Systems", "Soma Prime Barrel", "Fang Prime Handle", "Lex Prime Receiver", "Paris Prime Grip", "Bo Prime Handle", "Forma Blueprint"],
	t1md:["Saryn Prime Helmet Blueprint", "Vectis Prime Blueprint", "Braton Prime Barrel", "Forma Blueprint"],
	t2md:["Burston Prime Blueprint", "Nyx Prime Helmet Blueprint", "Vasto Prime Blueprint", "Braton Prime Blueprint", "Vasto Prime Barrel", "Bo Prime Blueprint"],
	t3md:["Vectis Prime Stock", "Trinity Prime Systems Blueprint", "Scindo Prime Blade", "Forma Blueprint", "Spira Prime Blade", "Soma Prime Barrel", "Burston Prime Receiver"],
	t4md:["Bo Prime Handle", "Kavasa Prime Collar Blueprint", "Vasto Prime Receiver", "Forma Blueprint", "Spira Prime Blueprint"],
	t1sab:["Scindo Prime Handle", "Odonata Prime Harness Blueprint", "Hikou Prime Stars", "Odonata Prime Systems Blueprint", "Vasto Prime Barrel"],
	t2sab:["Nyx Prime Helmet Blueprint", "Loki Prime Blueprint", "Hikou Prime Blueprint", "Bronco Prime Blueprint", "Wyrm Prime Carapace", "Hikou Prime Pouch", "Trinity Prime Helmet Blueprint"],
	t3sab:["Loki Prime Helmet Blueprint", "Forma Blueprint", "Scindo Prime Blade", "Loki Prime Systems Blueprint", "Bronco Prime Barrel", "Soma Prime Barrel", "Wyrm Prime Carapace", "Forma"],
	t4sab:["Loki Prime Helmet Blueprint", "Nyx Prime Systems Blueprint", "Carrier Prime Systems", "Forma Blueprint", "Loki Prime Chassis Blueprint", "Kavasa Prime Collar Band", "Ash Prime Helmet Blueprint", "Nova Prime Helmet Blueprint"],
	t1srv:["Rotation A:", "Bo Prime Ornament", "Odonata Prime Systems Blueprint", "Rotation B:", "*empty*", "Rotation C:", "Scindo Prime Handle", "Paris Prime Upper Limb", "Volt Prime Systems Blueprint", "Paris Prime Lower Limb", "Burston Prime Stock", "Nova Prime Helmet Bluerpint"],
	t2srv:["Rotation A:", "Akbronco Prime Blueprint", "Paris Prime Lower Limb", "Forma Blueprint", "Rotation B:", "Soma Prime Blueprint", "Fang Prime Blade", "Hikou Prime Blueprint", "Rotation C:", "Burston Prime Receiver", "Soma Prime Receiver", "Paris Prime Blueprint", "Ash Prime Chassis Blueprint", "Nikana Prime Blade", "Bronco Prime Blueprint", "Trinity Prime Chassis Blueprint"],
	t3srv:["Rotation A:", "Fang Prime Blueprint", "Fang Prime Blade", "Rotation B:", "Vectis Prime Barrel", "Lex Prime Barrel", "Volt Prime Helmet Blueprint", "Rotation C:", "Bo Prime Blueprint", "Carrier Prime Blueprint", "Volt Prime Chassis Blueprint", "Ash Prime Systems Blueprint", "Saryn Prime Chassis Blueprint", "Dual Kamas Prime Blueprint", "Nova Prime Chassis Blueprint", "Forma"],
	t4srv:["Rotation A:", "Ash Prime Chassis Blueprint", "Bo Prime Ornament", "Rotation B:", "Ortos Prime Blueprint", "Boltor Prime Receiver", "Lex Prime Barrel", "Rotation C:", "Loki Prime Helmet Blueprint", "Braton Prime Blueprint", "Forma Blueprint", "Odonata Prime Wings Blueprint", "Vasto Prime Blueprint", "Loki Prime Chassis Blueprint"],
	mercury: ["Mission type: Grineer Exterminate", "There are no archwing parts on that mission, sir"],
	venus:["Mission type: Corpus Exterminate", "Phaedra Receiver", "Velocitus Receiver", "Velocitus Barrel", "Velocitus Stock"],
	earth:["Mission type: Grineer Mobile Defense", "Dual Decurion Receiver", "Kaszas Handle", "Phaedra Barrel", "Velocitus Receiver", "Onorix Handle"],
	mars:["Mission type: Corpus Mobile Defense", "Dual Decurion Receiver", "Kaszas Handle", "Phaedra Barrel", "Velocitus Receiver", "Onorix Handle"],
	saturn:["Mission type: Grineer Exterminate", "There are no archwing parts on that mission, sir"],
	jupiter:["Mission type: Corpus Sabotage", "Dual Decurion Barrel", "Rathbone Head", "Rathbone Handle", "Fluctus Barrel", "Centaur Aegis"],
	uranus:["Mission type: Grineer Interception", "Elytron Harness", "Elytron Wings", "Elytron Systems", "Fluctus Stock", "Fluctus Limbs", "Centaur Blade", "Corvas Receiver"],
	neptune:["Mission type: Corpus Defense", "Phaedra Stock", "Kaszas Blade", "Corvas Barrel", "Corvas Stock", "Onorix Blade", "Fluctus Barrel"],
	eris:["Something Wicked..."]
}

module.exports = function(robot) {
  robot.respond(/what(?:')?s in (.*)/i, function(msg) {
	var sabsrv = new RegExp(/t[1-4]s$/i);
	if(sabsrv.test(msg.match[1])){
		string = "Which one, sir? Sabotage (sab) or Survival (srv)?"
	}
	else if(!determineTower(msg.match[1])){
		string = "I couldn't find " + msg.match[1] + ", sir."
    }
	else{
		string = "As of U18.4.12:\n";
		for(var i = 0; i < tables[determineTower(msg.match[1])].length; i++){
			string += tables[determineTower(msg.match[1])][i] + "\n";
		}
	}
	msg.send(string);
  });
  
  robot.respond(/where is (.*)/i, function(msg) {
	var match = false;
	var string = "As of U18.4.12:\n";
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
				else if(tables[key][0].substring(0, 8) == "Rotation"){
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
				//if key is not tower (archwing)
				else if(key.charAt(0) != 't'){
					if(tables[key][0].substring(0, 13) == "Mission type:"){
						string += ", archwing: " + tables[key][0].substring(14) + "\n";
					}
					else{
						string += ", archwing: infestation assassination\n";
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
		string = "Apologies, sir, I couldn't find " + msg.match[1] + ".  I can only find prime or archwing parts.";
	}
	else{
		string = string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}
	
	msg.send(string);
  });
};
