let num1 = 10;
let num2 = 20;
let num3 = num1 + num2;
console.log(`${num1} + ${num2} = ${num3}`);

console.log(`${num1} + ${num2} = ${num1+num2}`);

console.log(`${num1} - ${num2} = ${num1-num2}`);

console.log(`${num1} * ${num2} = ${num1*num2}`);

console.log(`${num1} / ${num2} = ${num1/num2}`);


num1 = 10;
num2 = 2;
num3 = num1%num2;
console.log(`${num1} % ${num2} = ${num3}`);

num1 = 7;
num2 = 10;
num3 = num1%num2;
console.log(`${num1} % ${num2} = ${num3}`);
console.log(num1 + ' % ' + num2 + ' = ' + num3);


num1 = 10;
console.log(`num1 = ${num1}`);    // num1 = 10
num1++;    // post-increment 
console.log(`num1 = ${num1}`);    // mum1 = 11

num1 = 10;
console.log(`num1 = ${num1}`);      // num1 = 10
++num1;     // pre-increment
console.log(`num1 = ${num1}`);      // num1 = 11


num1 = 10
let num4 = num1++; //  (assignment, post-increment)
console.log(`num1 = ${num1}`);      // num1 = 11
console.log(`num4 = ${num4}`);      // num4 = 10

num1 = 10
let num5 = ++num1; //  (pre-increment, assignment)
console.log(`num1 = ${num1}`);      // num1 = 11
console.log(`num5 = ${num5}`);      // num5 = 11


let lVar1=10;
let lVar2=20;
let lVar3=30;
let lVar4=40;

let res1 = lVar1 + lVar2++; // (addition, assignment, post-increment)
console.log(`\n\nlVar1 = ${lVar1}`);    // 10
console.log(`lVar2 = ${lVar2}`);        // 21
console.log(`res1 = ${res1}`);          // 30

// let abc = 2 + 1;

// let x = 2-4+1*3;    // mult, add, sub, assignment

// lVar1 = 10 , lVar2 = 21
let res2 = lVar1++ - ++lVar2;  //(pre-increment, subtraction, assignment, post-increment)
    /**
        lVar2 = 22
        lVar1 - lVar2 (-12)
        res2 = -12
        lVar1 = 11 

     */
console.log(`\n\nlVar1 = ${lVar1}`);    // 11
console.log(`lVar2 = ${lVar2}`);        // 22
console.log(`res2 = ${res2}`);          // -12

/**
 * 1. Create a variable name teamSize and assign your team size value to that variable
 * 2. Post Increment your teamSize by 1.
 * 3. Create new variable name teamName and assign your team name to it. 
 * 4. Construct a string which should display below text
 * 
 *  Our Team name is ABC and our team size is N.
 */

var teamSize = 13;
teamSize++;
var teamName = 'Real Madrid';
console.log(`Our Team name is ${teamName} and our team Size is ${teamSize}`);


/**
 * 1. Create a variable name accountBalance and assign 1000 to that variable
2. Lets assume you spent $1 at the park when you went our for walk
3. Post Decrement a dollar from you accountBalance
4. Construct a string which should display below text
I spent a dollar to buy a water and my new balance is N
*/

var accountBalance = 1000;
accountBalance--;
console.log(`I spent a dollar to buy water and my new balance is $${accountBalance}`)

/**1. Create a variable name age and assign your age to that variable
2. Lets assume today is your birthday 
3. Post Increment your age
4. Construct a string which should display below text
Since today is my birthday, I am N years old
*/

var age = 22;
age++;
console.log(`Since today is my birthday, I am ${age} years old`)