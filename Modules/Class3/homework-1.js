/**
 * Convert temperature values into different units
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Refer link for formula:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * 
 * Due Date: Jul-3 EOD
 * 
 */


// F -> C
// T(°C) = (T(°F) - 32) × 5/9
let fTemp1 = 90;
let cTemp1 = (fTemp1 - 32) * 5/9;
console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`);


// F -> K
let fTemp2 = 85;
let kTemp2 = (fTemp2 + 459.67) * 5/9;
console.log(`\n${fTemp2}°F is equals to ${kTemp2}°K`);

// C -> F
let cTemp3 = 76;
let fTemp3 = (cTemp3) * 9/5 + 32;
console.log(`\n${cTemp3}°C is equals to ${fTemp3}°F`);

// C -> K
let cTemp4 = 55;
let kTemp4 = (cTemp4) + 273.15;
console.log(`\n${cTemp4}°C is equals to ${kTemp4}°K`);

// K -> F
let kTemp5 = 24;
let fTemp5 = (kTemp5) *9/5 - 459.67;
console.log(`\n${kTemp5}°K is equals to ${fTemp5}°F`);

// K -> C
let kTemp6 = 67;
let cTemp6 = (kTemp6) - 273.15;
console.log(`\n${kTemp6}°K is equals to ${cTemp6}°C`);

