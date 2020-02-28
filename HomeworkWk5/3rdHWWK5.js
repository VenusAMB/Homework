const rl=require(`readline`). createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});



// module.exports = function (msg) {
//     console.log(msg);
// });
module.exports = {
    prompt(prompt) {
        rl.setPrompt(prompt);
        rl.prompt();
    },
    in(cb){
        rl.on(`line`, data => {
            if(data.trim() == 'exit') {
                rl.close();
                
            } else {
                cb(data);
            }
        })  
    }
}
// tried - failled - will repeat 
// in(cb) {
    
//     rl.question("What is your last name?", function(name) {
//     console.log(`${name}`);
            
//     rl.close();
    
//     rl.on("close", function(){
//     console.log("Good Job Collecting Info");
//     process.exit(0);
//     });
// });


