
 let storedData = []

 const writeToStorage = (payInstance) => {
   storedData.push(payInstance);
   const stringifyList = JSON.stringify(storedData);
   localStorage.setItem("payDataList" , stringifyList);
 }

 const loadDataUponReload = () => {
    const tempList = localStorage.getItem("payDataList");
    storedData = JSON.parse(tempList);
    console.log(storedData);
    return storedData
 }

 const deleteStorage = () => {
   localStorage.removeItem("payDataList")
   storedData = []
 }



 export const storage = {
  writeToStorage: writeToStorage,
  loadDataUponReload: loadDataUponReload,
  deleteStorage: deleteStorage
 }

