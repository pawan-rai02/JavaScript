let myDate = new Date()

console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

console.log(myDate.toLocaleString());


myDate.toLocaleString('default', {
    weekday : 'long',
    day : '2-digit'

})
console.log(myDate);



let myOwnDate = new Date(2025, 0, 19)
// console.log(myOwnDate.toDateString());


