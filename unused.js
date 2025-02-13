// import { displayData } from "./UiFunctions.js"
//local storage functions called from here


//data to be saved in a string of job Payment objects
// let payHistory = []
// let payHistoryID = 0


//save the data upon calculate
// export const setData = (payInstance) => {

//     let storedData = localStorage.getItem("payDataList")
//     payHistory = storedData ? JSON.parse(storedData) : []
//     payHistory.push(payInstance);
//     const stringifyList = JSON.stringify(payHistory);
//     localStorage.setItem("payDataList" , stringifyList);
//     // console.log("data saved! 😀");
//     displayData(payInstance, payHistoryID);
//     payHistoryID++;
// }  


// //retrieve the array of data using getData
// export const getData = () => {

//   const tempList = localStorage.getItem("payDataList");
//   payHistory = JSON.parse(tempList);
//   console.log(payHistory);

// }


// export const loadDataUponReload = () => {

//   getData()

//   payHistoryID = 0;
//   if (payHistory) {
//     payHistory.forEach( payInstance => { displayData(payInstance, payHistoryID) } )
//   }

// }

//reset data
// export const deleteData  = () => { 

//   localStorage.removeItem("payDataList")
//   payHistory = [];
//   console.log("deleted data");

//   const domObjects = document.querySelectorAll(".payHistoryCards");
//   domObjects.forEach(card => card.remove() );
//   payHistoryID = 0;

//  }
 /////////////////////////////////////////////////

 //TODO
 //save the storageArray 


////////////////////////////////////////////
//UIFUNCTIONS.JS

// export const displayData = (payInstance , payHistoryID) => {
  
//   let payHistoryCard = document.createElement("div");
//   payHistoryCard.id =`payHistory${payHistoryID}`;
//   payHistoryCard.className = 'payHistoryCards';
  

//   //FIXME
//   //INSERT THE PAY DATA HERE
//   payHistoryCard.innerHTML = `

//   <h2>Pay Record ${payHistoryID} </h2>
//     <p>Worked Hours:  ${payInstance._regularHours}</p>
//     <p>Pay Rate:  ${payInstance._regularPayRate}</p>
//     <p>State: ${payInstance._stateAbbreviation}</p>
//   <br>

//   `;
//   //
//   document.body.appendChild(payHistoryCard);
  
// }

///////////////////////////////////////////////