/**
 * 
 * multi-character
 * 
 * single-character
 * 
 * 
 * numbers
 *      whole (age, numberOfHouse, siblings, month, date, year)
 *      decimal (accountBalance, weight, distance, height)
 * 
 * true/false
 *      
 * 
 * Datatypes in programming:
 * 1. String
 * 2. char
 *      -> Js considers character as String datatype
 * 3. byte, short, long, int
 * 4. float, double
 *      -> Js considers digits as Number datatype
 * 5. boolean
 * 
 */

/**
 * Variables
 * 
 * In Java, if I want to store int-value, so I need int-variable
 * 
 * In Js, If I want to store int-value, so I need a variable

 */

let myAge = 20;
// print my age in the console using myAge-variable
console.log(myAge); // its going to print the value stored in myAge - variable

// print my type of myAge variable
console.log(typeof myAge);
/**
 * typeof helps us to check the type of any variable
 */

/**
 * variable can bre created using keywords:
 *      let
 *      var
 * 
 * var -> allows us to redeclare variable using same-name of existing variable
 * let -> does NOT allow to redeclare variable using same-name of existing variable
 *  --> let is better 
 * 
 * let myAge = 10;
 *      OR
 * var myAge = 10
 * 
 */

let myAge1 = 100;

/**
 * let doesn't allow to create multiple-variable with the same name in a scope
 */

var myName = 'Deepak';
console.log(myName);

var myName = 'ABCD';
console.log(myName);

/**
 * 
 * Good practices to provide names:
 * 1. variables
 *      -> name should relate to the stored value
 *      -> cannot use js-keywords (let, var, typeof, console etc)
 *      -> cannot use spaces
 *      -> starts with lowercase
 *      -> never start with digit or special character
 *      -> if name is more than one word, use camelCaseFormat
 *      eg:
 *          my age -> myAge
 *          my doge ate -> myDogAge
 * 
 * 2. Package:
 *      -> name should relate to the files/packages
 *      -> cannot use js-keywords (let, var, typeof, console etc)
 *      -> cannot use spaces
 *      -> starts with Uppercase
 *      -> never start with special character
 *      -> if name is more than one word, use camelCaseFormat
 *      eg:
 *      class 1 files -> Class1Files
 *      class 1 files -> Class1_Files
 */

// print age like -> My name is Deepak Sharma and I am 20 years old
let userName = 'Deepak Sharma';   //to store String-value in variable enclose the value in single-quotes.
let userAge = 20;

console.log('My name is '+userName+' and I am '+userAge+' years old');

let teamsize = 7
teamsize++
teamname = `Agaraj`
console.log(`Our teamname is ${teamname} and out teamsize is ${teamsize}`)