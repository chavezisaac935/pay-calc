// console.log(hoursWorked);
let hoursWorkedInput;
let payRateInput;
let stateAbbreviationInput;

const button = document.getElementById("calculateButton");
button.addEventListener("click", (event) => {
    hoursWorkedInput = document.getElementById("hoursWorked").value;
    console.log(hoursWorkedInput);
    
    payRateInput = document.getElementById("payRate").value;
    console.log(payRateInput);
    
    stateAbreviationInput = document.getElementById("stateAbbreviation").value;
    console.log(stateAbreviationInput);
});