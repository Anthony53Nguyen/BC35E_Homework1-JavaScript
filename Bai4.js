/* Calculate area and circumference of a rectangular.
- Input:
    + Prompt user to input height of the rectangular:  h
    + Prompt user to input width of the rectangular:  w
- Calculate area and circumference:
    area = h * w
    circum = (h+w)*2
- Output:
    Display area and cir to console log
*/
console.log("Calculate area and circumference of a rectangular.");

var h  = Number(prompt("\nPlease enter height of the rectangular: "));
var w  = Number(prompt("\nPlease enter width of the rectangular: "));

var area = h * w;
var circum = (h+w)*2;

console.log("\nHeight: " + h);
console.log("Width: " + w);
console.log("\nArea: " + area);
console.log("\nCircumference: " + circum);
console.log("*************************************");
