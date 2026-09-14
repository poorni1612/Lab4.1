
// Task 4: Refactoring for Reusability
// Refactor the calculateTotalCost function from Task 2 to include an optional discount parameter. If the discount is provided, the function should subtract the discount from the total cost before applying tax.
// If no discount is provided, calculate the total cost as before
let price = 230;
let quantity = 1;
let taxRate = 0.75;
let discount = 10;// I've implied the discount in percentage here
function calculateTotalCost(price, quantity, taxRate, discount) {
    let totalcost;
    let discountedprice;
    let cost;
    //Checking whether the price and quanity are greater than 0 and the taxarate is atleast 0.25% if not satisfied it would print Invalid Input
    if (price < 1 || quantity < 1 || taxRate <= 0.25) {
        return "Invalid Input";
    }
    //If the price and Qnt are valid then it executes this else block
    else {
        cost = price * quantity;
       discountedprice = cost-(cost * discount) / 100;
        return totalcost = discountedprice * ( 1+taxRate) ;
    }
}
//Calling the function 
console.log(calculateTotalCost(price, quantity, taxRate, discount));