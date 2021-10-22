/* This exercise should be moved before 17-Your first loop? */

// Declare and write your function here:

function standardsMaker(){
    for (var i = 0; i < 300 ; i++){
        console.log("I will write questions if I'm stuck");
    }
}

// Calling the function:
standardsMaker();

//---------------------------------------------------------------

/*Make the number a dynamic number inputted by user*/

var userNumber = parseInt(prompt("How many times?"));

function standardsMaker(times){
    for (var i = 0; i < times ; i++){
        console.log("I will write questions if I'm stuck");
    }
}

// Calling the function:
standardsMaker(userNumber);