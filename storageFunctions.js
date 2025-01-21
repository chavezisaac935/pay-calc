//local storage functions called from here

//data to be saved in a string of job Payment objects
let payHistory


//save the data
export const setData = (payData) => {

    localStorage.getItem("payDataList") ? 
      payHistory = JSON.parse(localStorage.getItem("payDataList")) 
      : [];
    payHistory.push(payData);
    const stringifyList = JSON.stringify(payHistory);
    localStorage.setItem("payDataList" , stringifyList);
    // console.log("data saved! 😀");
}  


//retrieve the array of data using getData
export const getData = () => {
  const tempList = localStorage.getItem("payDataList");
  payHistory = JSON.parse(tempList);
  console.log(payHistory);
}


//reset data
export const deleteData  = () => { 
  localStorage.removeItem("payDataList")
  payHistory = [];
  console.log("deleted data");
 }