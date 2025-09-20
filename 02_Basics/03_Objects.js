// singleton --> syntax  --> Object.create()


//object literals
const jsUser = {
    name       : 'Pawan',
    age        : 18,
    location   : 'Lucknow',
    email      : 'pawan@gmail.com',
    isLoggedIn : false,
    'full name': 'pawan rai'
}

console.log(jsUser['email']);
console.log(jsUser.email);
console.log(jsUser['full name']);
// console.log(jsUser.full name);  wrong syntax

