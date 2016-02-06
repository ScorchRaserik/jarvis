# Description:
#   The bot insulte Councilor Vay Hek
#
# Dependencies: none
# Configurations: none
# Commands: 
# 		vay hek - ??

insults = [
  "Vay Hek is a preposterously blabbering peon and a gross thick-headed shameless exhibition of genetic deficiency.",
  "Vay Hek is a precociously incompetent half-wit and a narcissistic grudge-festering object of execration.",
  "Vay Hek is a monstrously incorrigible barbarian and a feculent dull-witted abomination to all the senses.",
  "Vay Hek is a piteously subliterate loafer and an irredeemably despicable, yet utterly boring villain",
  "Vay Hek is an egregiously contemptible dingleberry and an absolutely repulsive spawn of a disastrous test tube experiment."
]

module.exports = (robot) ->
   #Bot repsonds to a compliment with a compliment
   robot.hear /vay hek/i, (msg) ->
     msg.send msg.random insults 