// Q1
const sentence = 'have a great day';
console.log(`sentence -> ${sentence}`);
let titleCase = sentence.toLowerCase().split(" ");
for(let i = 0; i < sentence.length; i++){
    titleCase[i] = titleCase[i].charAt[0].toUpperCase() + titleCase[i].slice(1);
 }
console.log(`titleCase -> ${titleCase}`)


// Q2
const sentence1 = 'have a great day';
console.log(`\nsentence1 -> ${sentence1}`);
let sentence1Split = sentence1.split(' ');
let sentence1Reverse = sentence1Split.reverse();
let sentence1ReverseJoin = sentence1Reverse.join(' ');
console.log(`sentence1 reversed -> ${sentence1ReverseJoin}`);



// Q3
const numbers = [1, 2 , 3 , 4 , 5];
console.log(`\nnumbers are -> ${numbers}`);
let sum = 0;
for (let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i]
}
console.log(`numbers sum -> ${sum}`);



// Q4
const numbers1 = [1, 2 , 3 , 4 , 5];
console.log(`\nnumbers1 are -> ${numbers1}`);
let sum1 = 0;
for (let i = 0; i < numbers1.length; i++){
    sum1 = sum1 + numbers1[i]
    average = sum1 / numbers1.length;
}
console.log(`numbers1 average -> ${average}`);