//two types of memory -> stack and heap

//stack (primitive)  &  heap(non-primitive)

//if a memory is in stack -> we get a copy of the object or variable
//if in heap -> we get the refrence to the object location

let myName = 'pawan'
let anoName = myName

console.log(anoName);

anoName = 'rai'
console.log(myName);


let userOne = {
    firstName : 'pawan',
    gmail     : 'pawan@gmail.com',
    phnumb    : 8484483838
} //this is an objet (non primitive) thats why its stored in heap and refrence is passed

let userTwo = userOne;

console.log('User one : ', userOne);

console.log('User two : ', userTwo);

userTwo.gmail = 'newGmail@gmail.com'

console.log('User one : ', userOne);

console.log('User two : ', userTwo);