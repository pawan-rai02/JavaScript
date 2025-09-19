const name = 'Pawan'
let repoCount = 90

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("Pawanr")
let gameName2 = 'pawan'

console.log(gameName[0]);
console.log(gameName2[0]);

console.log(gameName.length);
console.log(gameName2.length);

console.log(gameName.charAt(3));
console.log(gameName2.charAt(3));

console.log(gameName.indexOf('d'));
console.log(gameName.indexOf('P'));
console.log(gameName2.indexOf('p'));

const newStr = gameName.substring(0 , 4)
console.log(newStr);

const anoStr = gameName.slice(-8, -3)
console.log(anoStr);


const url = 'https://pawan.com/pawan%20rai'
console.log(url.replace('%20', '-'));

console.log();

console.log(url.includes('pawan'));

console.log(url.split('%'))