// Problem 1
var studentScore = 40;
var maxScore = 50;
console.log(`Student score -> ${studentScore}`);
if (studentScore >= 91 && studentScore < 100){
    console.log(`Grade -> A`);
}
    else if (studentScore >= 81 && studentScore < 90.99){
    console.log(`Grade -> B`);
}
    else if (studentScore >= 71 && studentScore < 80.99){
    console.log(`Grade -> C`);
}
    else if (studentScore >= 61 && studentScore < 70.99){
    console.log(`Grade -> D`);
}
    else if (studentScore >= 51 && studentScore < 60.99){
    console.log(`Grade -> E`);
}
    else if (studentScore < 51){
    console.log(`Grade -> F`);
}
    else {
    console.log(`Invalid student score`);
}



// Problem 2
let myNumber = 9;
console.log(`\nMy number -> ${myNumber}`);
if (myNumber % 5 === 0){
    console.log(`My number is divisible by 5`);
}
    else if (myNumber % 3 === 0){
    console.log(`My number is divisible by 3`);
}
    else if (myNumber % 5 === 0 && myNumber % 3 === 0){
    console.log(`My number is divisible by 5 and 3`);
}
    else {
    console.log(`My number is ${myNumber}`);
}




// Problem 3
let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
console.log(`\n${planets}`)
if ( planets.includes('Earth',0)) {
    console.log('Earth is mentioned in expected index');
}
    else {
    planets.unshift('Earth');
}



// Problem 4
const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
console.log(`\n${sports}`);
if (sports[2].toUpperCase() !== 'BASKETBALL' && sports.includes("BASKETBALL")) {
    console.log(`BASKETBALL is mentioned in the sports array`);
}
    else if (sports[2].toUpperCase() === "BASKETBALL"){
    console.log(`BASKETBALL is present at index-2`);
}
    else {
        sports.splice(2,1, 'BASKETBALL')
        console.log(`The value which is replaced ${sports[2]}`)
}





