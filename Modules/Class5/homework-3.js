let countryName = 'USA USA';
let countryName_split = countryName.split('');
const totalCountryName = countryName_split.length;
console.log(`\ncountryName-> ${countryName}`);
console.log(`totalCountryName-> ${totalCountryName}`);



const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let sentence_words_count = sentence.split(' ').length;
console.log(`\nsentence-> ${sentence}`);
console.log(`number of words in the sentence -> ${sentence_words_count}`);


let words = 'have a great day';
let words_split = words.split(' ');
let words_split_first = words_split[0].substring(0,1).toUpperCase() + words_split[0].substring(1).toLowerCase();
let words_split_second = words_split[1].substring(0,1).toUpperCase() + words_split[1].substring(1).toLowerCase();
let words_split_third = words_split[2].substring(0,1).toUpperCase() + words_split[2].substring(1).toLowerCase();
let words_split_fourth = words_split[3].substring(0,1).toUpperCase() + words_split[3].substring(1).toLowerCase();
console.log(`\nwords -> ${words}`);
console.log(`words in Titlecase -> ${words_split_first} ${ words_split_second} ${words_split_third} ${words_split_fourth}`);


let words1 = 'have a great day';
let words1_split = words1.split(' ');
let words1_split_first = words1_split[0].substring(0,1).toUpperCase();
let words1_split_second = words1_split[1].substring(0,1).toUpperCase();
let words1_split_third = words1_split[2].substring(0,1).toUpperCase();
let words1_split_fourth = words1_split[3].substring(0,1).toUpperCase();
console.log(`\nwords1 -> ${words1}`);
console.log(`words1 in Abbreviation -> ${words1_split_first + words1_split_second + words1_split_third + words1_split_fourth}`);
