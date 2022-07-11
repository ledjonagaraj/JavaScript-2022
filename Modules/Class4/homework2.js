const sentence1 = 'Hello dear, how are you doing?';
let result1 = 0;
if (length_of_sentence1 => 10) {
    result1 = 15;
}
else {
    result1 = 25;
}

let sentence1_length = sentence1.length;
result1 = sentence1_length >= 10 ? 15 : 25;
console.log(`result1 -> ${result1}`);



const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let sentence2_Replace_All_a_Alpha = sentence2.replace(/a/gi, 'Alpha');
console.log(`\nsentence2 -> ${sentence2}`)
console.log(`sentence2 Replace All a with Alpha -> ${sentence2_Replace_All_a_Alpha}`)


const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let sentence3Length = sentence3.length;
console.log(`\nsentece3 -> ${sentence3}`)
console.log(`sentence3 Length -> ${sentence3Length}`)

let startsWithPattern = 'health';
startsWithPattern = startsWithPattern.toUpperCase();
let sentence3_Uppercase = sentence3.toUpperCase();
let sentence3StartsWith_health = sentence3_Uppercase.startsWith(startsWithPattern)
console.log(`\ndoes sentence3 starts with 'health -> ${sentence3StartsWith_health}`)

let itIncludes = 'Body';
itIncludes = itIncludes.toUpperCase();
let sentence3ItIncludes_Body = sentence3_Uppercase.includes(itIncludes)
console.log(`\ndoes sentence3 contains with 'Body' -> ${sentence3ItIncludes_Body}`)

let indexOf = 'Body';
indexOf = indexOf.toUpperCase();
let sentence3Index_Body = sentence3_Uppercase.indexOf(indexOf);
console.log(`\nindex of 'Body' in sentence3 -> ${sentence3Index_Body}`)


let charAt70 = sentence3.charAt(70);
console.log(`\nthe last-character in sentence-3 -> ${charAt70}`);


