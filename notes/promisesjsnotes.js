/* make two function on that does complicated math and then one that waits for the math to get returned*/

//complicated math//

function someMath(){
    for(i = 0; i<100000000; i++){
        if(i = 100000000){
            console.log(i);
        }
    }
}

//where we put our promise//

function waitForMath(){
    return new Promise((resolve, reject) => {
        try{
        someMath();
        resolve();
    } catch(error){
        reject('error: numbers arnt real');
        }
    })
}

waitForMath().then(res => {
    console.log(res);
});