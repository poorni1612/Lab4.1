// Task 3: Functions with Conditional Logic
// Write a function called checkEligibility that takes two parameters: age and isEmployed. The function should check if a person is eligible for a program based on the following rules:
// If the person is over 18 and employed, they are eligible.
// If the person is over 18 but unemployed, they are conditionally eligible.
// If the person is 18 or younger, they are not eligible.
// Return an appropriate string message for each scenario.
let age = 28;
let isEmployed = false;
let yes;
let no;
function checkEligibility(age, isEmployed) {
    if (age >= 18 && isEmployed) {
        return "You are perfectly eligible!";

    }
    else if (age >= 18 && !isEmployed) {
        return "You are Conditionally Eligible!";
    }
    else if (age < 18 || !isEmployed) 
    {return "You are not Eligible";}
        
    else
    {
        return("Check after you are old Enough!");
    }
    

}
console.log(checkEligibility(age, isEmployed));