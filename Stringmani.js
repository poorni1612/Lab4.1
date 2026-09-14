// Task 1: Flexible String Manipulation with Functions
// Create a function called formatFullName that takes two parameters: firstName and lastName. The function should return the full name in the format lastName, firstName.
// Format the firstName and lastName so that the first letter of each is always capatilized.
// Add a condition that checks if either the first or last name is missing. If so, return a string saying “Invalid name input.”
let F_Name = "john";
let L_Name = "doe";

function formatFullName(firstName, lastName) {
    // Check if either name is missing or empty
    if (!firstName || !lastName) {
        return "Invalid name input.";
    }

    // Capitalize the first letter of each name and lowercase the rest
    let f_name = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    let l_name = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    return l_name+","+f_name;
}

// Pass the variables into the function call
console.log(formatFullName(F_Name, L_Name));
// Output: Doe, John