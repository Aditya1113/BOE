//ES5 
// var : functional scope

//ES6
//let and const : block scope


// function showMyName(){
//     if(true){
//         // var message = 'WELCOME'
//         let message = 'WELCOME'
//         console.log(message)
//     }
//     console.log(message) //gives error with let but works with var due to scoping
// }


function showMyName(){
    if(true){

        const message = 'WELCOME' // first initialise
        console.log(message)
        message = "Greetings" // re-initilaisation not possible

        // let message = 'WELCOME'  //first initialise
        // message = "Greetings" //re-initilaisation  possible
        console.log(message)
    }
}


showMyName()