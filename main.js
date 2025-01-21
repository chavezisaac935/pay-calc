import JobPayment from "./JobPayment.js";

let hoursWorkedInput;
let payRateInput;
let stateAbbreviationInput;
let jobPay;

const button = document.getElementById("calculateButton");
button.addEventListener("click", (event) => {
    hoursWorkedInput = document.getElementById("hoursWorked").value;
    console.log(hoursWorkedInput);
    
    payRateInput = document.getElementById("payRate").value;
    console.log(payRateInput);
    
    stateAbbreviationInput = document.getElementById("stateAbbreviation").value;
    console.log(stateAbbreviationInput);
    
    jobPay = new JobPayment(hoursWorkedInput,payRateInput,stateAbbreviationInput);
    console.log(jobPay.calculateGrossPay());
});
