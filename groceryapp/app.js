var groceryItems = [
    ["blueberries", 10],
    ["pineapple", 16],
    ["pickles", 14],
    ["chickpeas", 17],
    ["bananas", 18], 
    ["tomatoes", 20],
    ["cookies", 14],
    ["cake", 19],
    ["pie", 15]
    ];
    
    function sub(){
            let groceryItems = document.getElementById("userInput").value;
            for(let i = 0; i < groceryItems.lenth; i++){
                if(groceryItems == inventory[i][0]){
                if(groceryItems [i][1] > 1){
                    groceryItems [i][1] == 0 
                        console.log(groceryItems[i]);
                    } else { 
                    console.log ('groceryItems, is out of stock!!');
                if (qty[i][1] > 1){
                    qty[i]--;
                   // "groceryItems [i][1]--;
                   
                    (console.log(groceryItems[i]));
                    console.log('groceryItems, is out of stock!!!');
                       
                }else if (qty[i] == 0) {
                           console.log(`${name} is out of stock!!!`);
                           console.log(`${name}: ${qty[i]}`);
                       } else {
                            console.log (`${name} is ot of stock!!!`)
                            qty[i]--;
                            console.log(`${name}: $qty[i]`); 
    
                    }
                }
            }
        }
    }

    function add() {
        let groceryItems = document.getElementById("userImput").value; inventory.forEach
        for(let i = 0; i < groceryItems.lenth; i++){
            if(input == groceryItems[0]){
                groceryItems[1] += 1;
                groceryItems[1]++;
                    console.log(groceryItems [i]);                          
                  }
            }
    }