const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const input = require('./input');

module.exports = {
    out(data) {
        console.log(Your name is ${data}.`);
        input.prompt(`\nWhat is your name?\n`);
    }
    }
    
// rl.question("What city do you reside?"), function(City) {
    
//             console.log(`${city}`);
            
//             rl.close();   
// };

// rl.on("close", function(){
//     console.log("Good Job Collecting Info");
//     process.exit(0);
// });

// module.exports = function (msg) {
//     console.log(msg);
// };