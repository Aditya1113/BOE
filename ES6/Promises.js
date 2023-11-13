//ES Promise

// Promise : It is an object which returns a future value, but not right now

// Promises has three states 

// 1) Pending state
// 2) Fulfilled state
// 3) Reject State 


// Promises are used for communication with APIs

//Promise is well suited for handling aysnchronous operation

isCompleted = false;

let learnJs = new Promise((resolve,reject)=>{

    //Pending State (add Delay)

    setTimeout(()=>{
        if(isCompleted){ //API call
            resolve("I have completed React Js training")

        }
        else{
            reject("Error I did not complete")
        }
    },3000)

})

console.log(learnJs)

// there are two ways to handle/consume a Promise

// 1) using callbacks (.then and .catch)
// 2) using async/await 


learnJs
.then((response)=>console.log(response))
.catch((error)=>console.log(error))