/* Calculate sum of 2 digits in a 2-digit number.
- Input:
    + Prompt user to input a 2-digit number: num
- Calculate digit1, digit2, and sum of digit1 + digit2:
    digit1 = Math.floor(num/10)
    digit2 = num%10
    sum = digit1 + digit2
- Output:
    Display sum to console log.
*/
console.log("Calculate sum of 2 digits in a 2-digit number.");

var num = Number(prompt("\nPlease enter a 2-digit number: "));

var digit1 = Math.floor(num/10);
var digit2 = num%10;
var sum = digit1 + digit2;

console.log("\n2-digit number input: " + num);
console.log("Sum of 2 digits of " + num + " is: " + sum);


console.log("*************************************");