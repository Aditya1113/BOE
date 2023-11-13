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
