//2nd JS file created and called from 1st file using exports//
// var msg = require('./Messages.js');
// console.log(msg); ***(exercise cmd #1/2 completed and commited out)




// function myFunction(){
//     setInterval(console.log('Hello Venus'), 6000);
// }
// myFunction (); ***(not correct because used from html)





// //declaring function
// function SixsecTimeout() {
//     //this function is returning a callback function
//     //return function(){
//         //this callback is logging a message 
//        console.log("Hello Venus");
//     //} 
// };

// // //call function with setTimeout
//setTimeout(SixsecTimeout, 6000);
// // //***(exercise wait pt1 completed and commited out)


function first() {
    console.log('DONE!');
}

function second() {
    const promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve('hello venus');
        }, 2000)
    });
    return promise;
}

second().then(function (resolve) {
    console.log(resolve);
    first();
});

//Separate those two functions into separate files and call on of 
//them using node
function myFunction(){
var str = "hello venus";
var res = str.split("");
console.log(res);
}

myFunction();

export function functionName(){HWWK5.js}



//Create a second function that does something once 
//the first function has completed. (Prefer that you use a Promise)
// function SixsecTimeout() {
//     //this function is returning a callback function
//     return function(){
//         //this callback is logging a message 
//        console.log("Hello Venus");
//     } 
// };

//setTimeout(SixsecTimeout(), 6000);

// let promise = new Promise(function(resolve) {
//     setTimeout(() => resolve ("Good Job"), 6000);
// }

//     promise.then(
//         function(result)
//         function(error)
//     );



// function helloVenus() {
//     console.log('hello venus');
// }

// console.log(helloVenus);



// setTimeout(function () {
//     console.log('hello')
// }, 6000);











