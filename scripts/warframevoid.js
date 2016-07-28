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
    lf1: ["*Common*", "Fang Prime Blade", "Paris Prime Blueprint", "*Uncommon*", "Odonata Prime Blueprint", "Scindo Prime Blueprint", "*Rare*", "Fragor Prime Blueprint"],
    lf2: ["*Common*", "Odonata Prime Systems", "Hikou Prime Stars", "Paris Prime Upper Limb", "*Uncommon*", "Burston Prime Barrel", "*Rare*", "Vauban Prime Blueprint"],
    lm1: ["*Common*", "Boar Prime Receiver", "Lex Prime Receiver", "*Uncommon*", "Dakra Prime Blueprint", "Soma Prime Blueprint", "*Rare*", "Mag Prime Blueprint"],
    ls1: ["*Common*", "Bronco Prime Blueprint", "Hikou Prime Blueprint", "Paris Prime String",  "*Uncommon*", "Paris Prime Grip", "*Rare*", "Spira Prime Pouch"],
    ls2: ["*Common*", "Akbronco Prime Blueprint", "Nyx Prime Blueprint", "Carrier Prime Systems", "*Uncommon*", "Kavasa Prime Band", "*Rare*", "Soma Prime Stock"],
    lv1: ["*Common*", "Paris Prime Lower Limb", "Burston Prime Stock", "Paris Prime Upper Limb", "*Uncommon*", "Volt Prime Systems", "*Rare*", "Fragor Prime Handle"],
    mb1: ["*Common*", "Dakra Prime Handle", "Orthos Prime Handle", "*Uncommon*", "Mag Prime Chassis", "Orthos Prime Blueprint", "*Rare*", "Boar Prime Stock"],
    mc1: ["*Common*", "Saryn Prime Systems", "Nova Prime Neuroptics", "*Uncommon*", "Scindo Prime Handle", "Ash Prime Blueprint", "*Rare*", "Carrier Prime Cerebrum"],
    mn1: ["*Common*", "Fang Prime Handle", "Braton Prime Stock", "Fang Prime Blueprint", "*Uncommon*", "Dual Kamas Prime Handle", "*Rare*", "Nyx Prime Neuroptics"],
    md1: ["*Common*", "Orthos Prime Handle", "Lex Prime Blueprint", "*Uncommon*", "Orthos Prime Blade", "*Rare*", "Dual Kamas Prime Blade"],
    mn2: ["*Common*", "Fang Prime Handle", "Bronco Prime Blueprint", "Hikou Prime Blueprint", "*Uncommon*", "Ash Prime Neuroptics", "*Rare*", "Vauban Prime Neuroptics"],
    mv1: ["*Common*", "Burston Prime Receiver", "Carrier Prime Blueprint", "Spira Prime Blueprint", "*Uncommon*", "Braton Prime Blueprint", "*Rare*", "Vectis Prime Receiver"],
    mv2: ["*Common*", "Vasto Prime Receiver", "Paris Prime Blueprint", "Ash Prime Chassis", "*Uncommon*", "Volt Prime Chassis", "*Rare*", "Nikana Prime Blade"],
    nd1: ["*Common*", "Vasto Prime Barrel", "Boar Prime Blueprint", "Mag Prime Systems", "*Uncommon*", "Trinity Prime Neuroptics", "*Rare*", "Dakra Prime Blade"],
    nn1: ["*Common*", "Hikou Prime Stars", "Vectis Prime Barrel", "*Uncommon*", "Kavasa Prime Blueprint", "Soma Prime Receiver", "*Rare*", "Nyx Prime Chassis"],
    ns1: ["*Common*", "Soma Prime Blueprint", "Carrier Prime Carapace", "Lex Prime Barrel", "*Uncommon*", "Trinity Prime Chassis", "*Rare*", "Saryn Prime Blueprint"],
    nn2: ["*Common*", "Lex Prime Blueprint", "Vasto Prime Barrel", "Fang Prime Blueprint", "*Uncommon*", "Nova Prime Blueprint", "*Rare*", "Vauban Prime Systems"],
    ns2: ["*Common*", "Burston Prime Stock", "Paris Prime Lower Limb", "Nova Prime Systems", "*Uncommon*", "Nyx Prime Systems", "Paris Prime Upper Limb", "*Rare*", "Saryn Prime Chassis"],
    ns3: ["*Common*", "Soma Prime Barrel", "Carrier Prime Blueprint", "Burston Prime Receiver", "*Uncommon*", "Vasto Prime Blueprint", "*Rare*", "Spira Prime Blade"],
    nv1: ["*Common*", "Nyx Prime Blueprint", "Dual Kamas Prime Blueprint", "*Uncommon*", "Volt Prime Blueprint", "Bronco Prime Barrel", "*Rare*", "Nova Prime Chassis"],
    aa1: ["*Common*", "Fragor Prime Head", "Braton Prime Stock", "Trinity Prime Systems", "*Uncommon*", "Dual Kamas Prime Handle", "Akstiletto Prime Barrel", "*Rare*", "Nikana Prime Blueprint"],
    ak1: ["*Common*", "Lex Prime Barrel", "Hikou Prime Pouch", "Odonata Prime Harness", "*Uncommon*", "Akstiletto Prime Receiver", "*Rare*", "Kavasa Prime Buckle"],
    an2: ["*Common*", "Carrier Prime Carapace", "Lex Prime Receiver", "Bronco Prime Blueprint", "*Uncommon*", "Ash Prime Neuroptics", "*Rare*", "Nikana Prime Hilt"],
    an1: ["*Common*", "Fang Prime Blade", "Braton Prime Blueprint", "*Uncommon*", "Odonata Prime Wings", "Akstiletto Prime Link", "*Rare*", "Ash Prime Systems"],
    as1: ["*Common*", "Bronco Prime Receiver", "Bronco Prime Blueprint", "*Uncommon*", "Akbronco Prime Link", "Trinity Prime Blueprint", "*Rare*", "Scindo Prime Blade"],
    av1: ["*Common*", "Odonata Prime Systems", "Dual Kamas Prime Blueprint", "Carrier Prime Systems", "*Uncommon*", "Volt Prime Neuroptics", "*Rare*", "Vauban Prime Chassis"],
    av2: ["*Common*", "Trinity Prime Systems", "Mag Prime Neuroptics", "Hikou Prime Pouch", "*Uncommon*", "Boar Prime Barrel", "Braton Prime Receiver", "*Rare*", "Vectis Prime Stock"],
    av3: ["*Common*", "Trinity Prime Systems", "Trinity Prime Neuroptics", "Vasto Prime Barrel", "*Uncommon*", "Braton Prime Receiver", "Orthos Prime Blueprint", "*Rare*", "Vectis Prime Stock"],
    
    //Archwing
    sm: ["Kaszas Handle", "Velocitus Receiver", "Corvas Stock", "Agkuza Guard", "Fluctus Stock"],
    aoh: ["Dual Decurion Barrel", "Phaedra Barrel", "Corvas Barrel", "Cyngas Barrel", "Centaur Aegis"],
}

module.exports = function(robot) {
  robot.respond(/what(?:')?s in (.*)/i, function(msg) {
    if(!determineInput(msg.match[1])){
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
                //TODO: Translate syndicate keys (sm = Steel Meridian, aoh = Arbiters of Hexis, etc etc)
                //TODO: Translate relic location mission names
                
                
                string += item + " - " + key;
                //check rotation/rarity
                if(tables[key][0].substring(0, 1) == "*"){
                    var rotationFound = false;
                    for(var j = i; j >= 0 && !rotationFound; j--){
                        var item = tables[key][j];
                        if(item == "*Rare*"){
                            string += ", *Rare*\n";
                            rotationFound = true;
                        }
                        else if(item == "*Uncommon*"){
                            string += ", *uncommon*\n";
                            rotationFound = true;
                        }
                        else if(item == "*Common*"){
                            string += ", *common*\n";
                            rotationFound = true;
                        }
                        else if(item =="*Rotation A*"){
                            string += ", *rotation A* (first two waves)\n";
                            rotationFound = true;
                        }
                        else if(item =="*Rotation B*"){
                            string += ", *rotation B* (every third out of four waves)\n";
                            rotationFound = true;
                        }
                        else if(item =="*Rotation C*"){
                            string += ", *rotation C* (every fourth wave)\n";
                            rotationFound = true;
                        }
                    }
                }
                //add check for mission type for relic location
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
