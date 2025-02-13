import JobPayment from "./JobPayment.js";
import { storage } from "./StorageFunctions.js";
import { ui } from "./UiFunctions.js";

window.addEventListener('load' , () => {
  let paymentHistory = storage.loadDataUponReload()
  ui.reloadUIElements(paymentHistory)
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

    ui.clearInputValues()

    storage.writeToStorage(jobPay)
    ui.displayPayment(jobPay)
    payID++

});

const deleteButton = document.getElementById("clearButton");
deleteButton.addEventListener("click", (event) => { 
    storage.deleteStorage()
    ui.deleteHistory()
    ui.clearInputValues()
 })