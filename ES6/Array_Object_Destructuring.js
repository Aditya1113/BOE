let food = ['Pizza','Burger','Pasta','Coffee','Tea']

// let p = food[0]
// let b = food[1]
// let pa = food[2]

//Destrcuture Array

let [p,b,pa,c,t] = food

console.log(p,b,pa,c,t)

//Destructure object

let person = {
    name : 'Peter',
    age:'52',
    salary:'100$'
}

// console.log(person.name,person.age,person.salary) 

let {name,age,salary} = person


console.log(name,age,salary)


let {name:n,age:a,salary:s} = person


console.log(n,a,s)



/*
 In React

props:{
    username,
    age,
    dob
}

props.username,props.age,props.dob,

let {username,age,dob} = props

username,age,dob

(usage in UI)

<h1>username</h1>
<h2>username</h2>
<p>dob</p>

*/