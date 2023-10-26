const name = "Sneha"
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Sneha-Jii')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "   Sneha   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sneha.com/sneha%20sharma"
console.log(url.replace('%20', '-'))

console.log(url.includes('sneha'))

console.log(gameName.split('-'));