// Converting all values in array to uppercase
let siblingNames = ['Deepak', 'Heena', 'Gigi', 'Yuri']
console.log(siblingNames);
let convertIntoUppercase = (userName) => userName.toUpperCase();
siblingNames = siblingNames.map(convertIntoUppercase);
//siblingNames = siblingNames.map(sName => sName.toUpperCase());
console.log(siblingNames);



console.log(`\nFilter()function\n`);
let nameContainsA = userName => userName.includes('A');
let siblingNamesWithA = siblingNames.filter(nameContainsA);
console.log(siblingNamesWithA);


console.log(`\nNumbers that are greater than 5\n`);
const numbers = [56, 3, -1, 4, 6, 7]
let numbersGr5 = numbers.filter(num => num > 5);
console.log(numbersGr5);