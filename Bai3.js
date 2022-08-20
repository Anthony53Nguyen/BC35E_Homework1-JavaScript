/* Currency Exchange.
- Input:
    + Prompt user to input number dollars amount: dollars
    + dollars-to-dong exchange rate: rate
- Calculate amount in vietnam dong:
    dong = dollars * rate
- Output:
    Display dong to console log
*/
console.log("Dollar to dong exchange");

var dollars = Number(prompt("\nPlease enter amount in dollars: "));
const RATE = 25300;

var dong = dollars * RATE;

console.log("\nAmount in dollars: " + dollars);
console.log("Exchange rate: " + RATE + " dong/dollar");
console.log("\nAmount in dong: " + dong);

console.log("*************************************");