var firstNum =prompt("Please enter first number:");

var Action = prompt("please enter + - * or /");

var secondNum = prompt("Please enter second number:");

if(Action == '+'){
    console.log ( Number(firstNum) + Number(secondNum) )
} else if( Action == '-'){
    console.log( Number(firstNum) - Number(secondNum) )
} else if( Action == '*'){
    console.log( Number(firstNum) * Number(secondNum) )
} else if( Action == '/'){
    console.log( Number(firstNum) / Number(secondNum) )
}


