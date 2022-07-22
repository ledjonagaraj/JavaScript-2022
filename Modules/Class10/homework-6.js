// Q1
function toTitleCase(sentence){
    sentence = sentence.toLowerCase().split(' ');
    for (var i=0 ; i < sentence.length; i++){
        sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
}
    return sentence.join(' ');
}
console.log(`Making a sentence into titlecase:`);
console.log(toTitleCase("have a great day"));




// Q2
function reverseString(string) {
    let stringSplit = string.split(' ');
    let stringReverse = stringSplit.reverse();
    return stringReverse.join(' ');
}
console.log(`\nReversing a string:`);
console.log(reverseString("have a great day"));




// Q3
function totalNumbers(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum = sum + numbers[i]
    }
    return sum;
}
console.log(`\nFinding the total numbers in array:`);
console.log(totalNumbers([1, 2, 3, 4, 5]));




// Q4
function averageNumbers(numbers1){
    let sum = 0;
    for (let i = 0; i < numbers1.length; i++){
        sum = sum + numbers1[i]
        average = sum / numbers1.length;
    }
    return average;
}
console.log(`\nFinding the average of numbers in array:`);
console.log(averageNumbers([1, 2, 3, 4, 5]));

