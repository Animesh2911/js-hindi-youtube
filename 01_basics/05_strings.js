const name = "Animesh"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Animesh-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  Animesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://animesh.com/animesh%20tiwari"

console.log(url.replace('%20', '-'))

console.log(url.includes('kumar'))

console.log(gameName.split('-'));