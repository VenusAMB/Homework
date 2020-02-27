//Exercise Auto Complete
    //when creating an auto complete feature:
        //input text box
        //list of terms
        //compare
        //validate input (no special characters)
//HTML file includes: input box, user id, button 
//JS file includes: list of terms/array
var flavors = [
    "Mint",
    "Chocolate",
    "Vanilla", 
    "Strawberry",
    "Rage",
    "Moose tracks"
  ];
  //case senstive- maybe fix
  function autoComplete(){
    var input = document.getElementById("userInput").value;
    if(isValid(input)){
      var suggestions = document.getElementById("productName");
        suggestions.innerHTML = " ";
     flavors.forEach(function (flavor){
      if(flavor.startsWith(input)){
        // append an option with the flavor
        var option = document.createElement('option');
        option.value = flavor;
        suggestions.appendChild(option);
         }
     });
      
    } else {
      console.log("invalid input");
      //change to alert once done
    }
  }
  
  function isValid(input){
    var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\d+]/g;
    if(regex.test(input)){
      return false
    } else {
      return true;
    }
  }