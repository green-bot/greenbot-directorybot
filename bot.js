var prompt = process.env.PROMPT
var commands = {}
for(var i = 1; i <= 9; i++) {
  var mapping = process.env["MAPPING_" + i]
  if (mapping) {
    mapping = mapping.split(':')
    var keyword = mapping[0].trim().toLowerCase()
    var slashCommand = mapping[1].trim().toLowerCase()
    commands[keyword] = slashCommand
  }
}

console.log(JSON.stringify(commands))

var readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


var handleChoice = function(channel) {
  readLine.question(prompt, function(answer) {
    answer = answer.trim().toLowerCase()
    console.log( commands[answer] )
  })
}

handleChoice();
