//ES5
// object constructor, object prototype

//ES6 : class and object 


class Rectangle {

    constructor(l,w){
        this.length = l
        this.width = w
    }

    getArea(){
        return this.length*this.width
    }

    getPerimeter(){
        return 2*(this.length+this.width)
    }

}

let r1 = new Rectangle(10,20)
let r2 = new Rectangle(30,5)

console.log(r1.getArea())
console.log(r1.getPerimeter())
console.log(r2.getArea())
console.log(r2.getPerimeter())
