let paymentHistory = []
let payID = 0

const displayPayment = (payInstance) => {
  let payHistoryCard = document.createElement("div");
  payHistoryCard.id =`payHistory${payID}`;
  payHistoryCard.className = 'payHistoryCards';

  payHistoryCard.innerHTML = `

  <h2>Pay Record ${payID + 1} </h2>
    <p>Worked Hours:  ${payInstance._regularHours}</p>
    <p>Pay Rate:  ${payInstance._regularPayRate}</p>
    <p>State: ${payInstance._stateAbbreviation}</p>
  <br>

  `;
  document.body.appendChild(payHistoryCard);
  
}

const deleteHistory = () => {
    const domObjects = document.querySelectorAll(".payHistoryCards");
    domObjects.forEach(card => card.remove() );
    payID = 0
}

const clearInputValues = () => {
  document.getElementById("hoursWorked").value = ''
  document.getElementById("payRate").value = ''
  document.getElementById("stateAbbreviation").value = ''
}

const reloadUIElements = (recievedHistory) => {
  paymentHistory = recievedHistory
  for (let i = 0; i < paymentHistory.length; i++) {
    ui.displayPayment(paymentHistory[i])
    payID++
  }
}


export const ui = {
  displayPayment: displayPayment,
  deleteHistory: deleteHistory,
  clearInputValues: clearInputValues,
  reloadUIElements: reloadUIElements,
}