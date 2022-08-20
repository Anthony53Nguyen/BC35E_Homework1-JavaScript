/* Calculate employee income.
- Input:
    + Prompt user to input number of worked days:  numDays
    + Pay-per-day rate: PAY_PER_DAY
- Calculate income:
    income = numDays * payPerDay
- Output:
    Display income to console log
*/
console.log("Calculate employee income.");

var numDays = Number(prompt("\nPlease enter number of days worked: "));
const PAY_PER_DAY = 100000;

var income = numDays * PAY_PER_DAY;

console.log("\nNumber of worked days: " + numDays);
console.log("Pay-per-day rate: " + PAY_PER_DAY);
console.log("\nEmployee income: " + income);

console.log("*************************************");










