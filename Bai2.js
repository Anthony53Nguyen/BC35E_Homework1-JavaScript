/* Calculate average of 5 numbers.
- Input:
    + Prompt user to input 5 numbers to calculate average:  num1, num2, num3, num4, num5
    
- Calculate average:
    avg = (num1 + num2 + num3 + num4 + num5)/5
- Output:
    Display avg to console log
*/
console.log("Calculate average of 5 numbers.");

var num1 = Number(prompt("\nPlease enter number 1: "));
var num2 = Number(prompt("\nPlease enter number 2: "));;
var num3 = Number(prompt("\nPlease enter number 3: "));
var num4 = Number(prompt("\nPlease enter number 4: "));
var num5 = Number(prompt("\nPlease enter number 5: "));

var avg = (num1 + num2 + num3 + num4 + num5)/5;

console.log("\nAverage of " + num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " +
                            + num5 + " is: " + avg);
console.log("*************************************");