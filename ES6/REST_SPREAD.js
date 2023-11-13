//REST PARAMETER : pack the value into an array

//SPREAD OPERATOR : Unpack the values 

//Rest Paramter

function TotalSum(...number){
    console.log(number)
    //number = [10,20,30,40,50,60,70]
}

TotalSum(10,20,30,40,50,60,70)

//Spread Operator 

function TotalSum1(a,b,c,d){
    console.log(a,b,c,d)
  
}

let numberValue = [10,20,30,40]

TotalSum1(...numberValue)