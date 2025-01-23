//local storage functions called from here

// ************* CONTENTS *******************************************
//setData() - sets the payObject as object within the payHistoryArray
//getData() - retrieves the data
//displayData() - takes payObject as argument and creates HTML object
//                with payHistory class INDIVIDUALLY
//loadDataUponReload() - getData() and then based on payHistory length 
//                       calls dispalyData() to render every object
//resetData() - deletes payHistory array from memory and deletes every
//              payhistory HTML object from the DOM
// ******************************************************************



//data to be saved in a string of job Payment objects
let payHistory = []
let payHistoryID = 0


//save the data upon calculate
export const setData = (payInstance) => {

    let storedData = localStorage.getItem("payDataList")
    payHistory = storedData ? JSON.parse(storedData) : []
    payHistory.push(payInstance);
    const stringifyList = JSON.stringify(payHistory);
    localStorage.setItem("payDataList" , stringifyList);
    // console.log("data saved! 😀");
    displayData(payInstance)

}  


//retrieve the array of data using getData
export const getData = () => {

  const tempList = localStorage.getItem("payDataList");
  payHistory = JSON.parse(tempList);
  console.log(payHistory);

}

//present the data 
const displayData = (payInstance) => {
  
  let payHistoryCard = document.createElement("div");
  payHistoryCard.id =`payHistory${payHistoryID}`;
  payHistoryCard.className = 'payHistoryCards';
  

  //FIXME
  //INSERT THE PAY DATA HERE
  payHistoryCard.innerHTML = `ID: payHistory${payHistoryID}. <br> Display payInstance here <br> <br>`;
  //
  
  document.body.appendChild(payHistoryCard);
  payHistoryID++;
  
}

export const loadDataUponReload = () => {

  getData()

  payHistoryID = 0;
  if (payHistory) {
    payHistory.forEach( payInstance => { displayData(payInstance) } )
  }

}

//reset data
export const deleteData  = () => { 

  localStorage.removeItem("payDataList")
  payHistory = [];
  console.log("deleted data");

  const domObjects = document.querySelectorAll(".payHistoryCards");
  domObjects.forEach(card => card.remove() );
  payHistoryID = 0;

 }