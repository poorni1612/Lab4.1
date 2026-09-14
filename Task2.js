// Task 2: Mathematical Operations with Multiple Parameters
// Write a function called calculateTotalCost that takes three parameters: price, quantity, and taxRate.
// The function should calculate the total cost of items, including tax. Use the formula: totalCost = (price * quantity) * (1 + taxRate).
// Ensure that price, quantity, and taxRate are all valid numbers. If any are invalid, return a string: “Invalid input.

let price=230;
let quantity=1;
let taxRate=0.75;
function calculateTotalCost(price,quantity,taxRate)
{
    let totalcost;
if ( price <1 || quantity<1 || taxRate<=0.25)
{
return "Invalid Input";
}
else
  return  totalcost=((price*quantity)*(1+taxRate));

}
console.log(calculateTotalCost(price,quantity,taxRate));