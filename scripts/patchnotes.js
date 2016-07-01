// Description:
//   Bot posts most recent Warframe patch
//
// Dependencies:
//   XMLHttpRequest: 1.8.x
//
// Configuration:
//   None
//
// Commands:
//   hubot patch notes - Displays latest Warframe patch notes

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = function(robot) {
	robot.respond(/patch notes/i, function(msg) {
		var link = "";
		var text = "";
		var x = new XMLHttpRequest();
		x.onreadystatechange = function () {
		  if (x.readyState == 4 && x.status == 200)
		  {
			var doc = x.responseText;
			link = doc.split("<link>")[2].split("</link>")[0] + "\n";
			text = doc.split("<description>")[2].split("</description>")[0];
			text = text.replace(/\n{2,}/g, "\n");
			text = text.replace(/\<\!\[CDATA\[/g, "");
			text = text.replace(/\]\]\>/g, "");
			text = text.replace(/\<p\>/g, "");
			text = text.replace(/\<\/p\>/g, "");
			text = text.replace(/\<ul\>/g, "");
			text = text.replace(/\<\/ul\>/g, "");
			text = text.replace(/\<li\>/g, "");
			text = text.replace(/\<\/li\>/g, "");
			text = text.replace(/\<strong\>/g, "**");
			text = text.replace(/\<\/strong\>/g, "**  ");
			text = text.replace(/\&gt\;/g, ">");
			text = text.replace(/\&lt\;/g, "<");
			text = text.replace(/\&amp\;/g, "&");
			text = text.replace(/\s{2,}/g, "\n * ");
			text = text.replace(/\s\*\s\*\*/g, "\n**")
			text = text.slice(0, -3);
			msg.send(link + text);
		  }
		};
		x.open("GET", "https://forums.warframe.com/forum/3-pc-update-build-notes.xml", true);
		x.send(null);
	});
}