//Exercise input/file
// //Create a program that reads a user's input and appends it to a file. 
//Once it is saved it the reads that file to the console.

// Emit Event:
// When a file has been created
// When a file has been written to
// When a file has been read

var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Where do you go to school? ', TheClubhouse => {
      const userInputSchool = TheClubhouse.trim();

      fs.writeFile('6thHWWk5.txt', userInputSchool , (err) => {
        if (err) throw err;
        console.log('The file has been created');
      });

    //   fs.appendFile('6thHWWk5.txt', userInputSchool , (err) => {
    //     if (err) throw err;
    //     console.log(`The ${userInputSchool} was appended to file!`);
    //   });

    fs.readFile('6thHWWk5.txt', function (err, data) {
        if (err) throw err;

console.log(data);
console.log('All has been read');
});
//    console.log(`Thank you for your participation ${TheClubhouse}`);
 readline.close();
  });


  fs.watch('6thHWWk5.txt', (event, filename) => {
    if (filename && event ==='change') {
      console.log(`${filename} file Changed`);
    }
  });

/**
 * Looks great! Awesome job!
 */