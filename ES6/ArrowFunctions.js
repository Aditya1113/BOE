/*

1) Named Function : a function with a name 
eg function MyName()
2) Anonymous Function or function expression : a function without a name
eg.-> let sum = function(a,b){
    return a+b
}

Arrow function is a concise way of writing function expression
*/

// Normal Anonymous Function
// let sum = function(a,b){
//     return a+b
// }

//Arrow Function
let sum1 = (a, b) => a + b;
console.log(sum1(5, 5));

//single parameter, single statement
let greet = (name) => console.log(`Hi ${name}!`);
greet("Peter");

//single parameter, multiple statement
let test = (age) => {
  if (age > 18) {
    console.log("can vote");
  } else {
    console.log("cannot vote");
  }
};

test(15)
test(19)




//hoisting

console.log(data)

data = 17

console.log(data)

var data




// Execution context

// 1) Memory execution phase

// js allocates memory to variables and functions of the entire program

// variables -> undefined
// functions -> body of function is stored in memory


// 2) Code execution

// variables -> values
// data = 17

// functions -> run the functions

// hoisting -> access the varibales and functionseven before decalration

console.log(sum3)
console.log(myFunc)


let sum3 = (a,b)=>a+b   //arrow functions are not hoisted

function myFunc(){
    console.log('Hi')
}


// var auth = token authoristion  //integer

auth = "strisknnf"

//try to use let and const wherever you want  


// var adminAccess = "ajdhajsd"

// var adminAccess = 

