//primitive datatypes

//String, Number, Boolean, null, undefined, Symbol, BigInt


//reference (non primitive)
//Array, Objects, Functions


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id)
console.log(anotherId)
console.log(id == anotherId)  //false


//arrays
const heros = ['IronMan', 'BatMan', 'SpiderMan', 'Wonder Women', 'Captian America'];
console.log(heros);

//objects
let myObj = {
    name : 'pawan',
    age  : 20,
    gender : 'Male'
}

console.log(myObj)


//functions
const myFunction = function(){
    console.log('Hello World')
}
