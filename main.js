import JobPayment from "./JobPayment.js";
import {setData , getData, deleteData, loadDataUponReload} from "./storageFunctions.js"

let hoursWorkedInput;
let payRateInput;
let stateAbbreviationInput;
let jobPay;

//upon window load check for stored info to show
window.addEventListener('load' , () => {
  loadDataUponReload()
})


//button logic
const button = document.getElementById("calculateButton");
button.addEventListener("click", (event) => {
    hoursWorkedInput = document.getElementById("hoursWorked").value;
    console.log(hoursWorkedInput);
    
    payRateInput = document.getElementById("payRate").value;
    console.log(payRateInput);
    
    stateAbbreviationInput = document.getElementById("stateAbbreviation").value;
    console.log(stateAbbreviationInput);
    
    jobPay = new JobPayment(hoursWorkedInput,payRateInput,stateAbbreviationInput);
    console.log(jobPay);

    setData(jobPay)
    getData()
});

const deleteButton = document.getElementById("clearButton");
deleteButton.addEventListener("click", (event) => { 
    deleteData()
 })