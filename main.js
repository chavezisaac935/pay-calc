import JobPayment from "./JobPayment.js";
import { storage } from "./StorageFunctions.js";
import { display } from "./UiFunctions.js";

let paymentHistory = []
let payID = 0

window.addEventListener('load' , () => {
  paymentHistory = storage.loadDataUponReload()

  for (let i = 0; i < paymentHistory.length; i++) {
    display.displayPayment(paymentHistory[i] , payID)
    payID++
  }
})


//button logic
const button = document.getElementById("calculateButton");
button.addEventListener("click", (event) => {
    let hoursWorkedInput;
    let payRateInput;
    let stateAbbreviationInput;
    let jobPay;

    hoursWorkedInput = document.getElementById("hoursWorked").value;
    
    payRateInput = document.getElementById("payRate").value;
    
    stateAbbreviationInput = document.getElementById("stateAbbreviation").value;
    
    jobPay = new JobPayment(hoursWorkedInput,payRateInput,stateAbbreviationInput);

    storage.writeToStorage(jobPay)
    display.displayPayment(jobPay , payID)
    payID++

});

const deleteButton = document.getElementById("clearButton");
deleteButton.addEventListener("click", (event) => { 
    storage.deleteStorage()
    display.deleteHistory()
    payID = 0
 })