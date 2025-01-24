export const displayData = (payInstance , payHistoryID) => {
  
  let payHistoryCard = document.createElement("div");
  payHistoryCard.id =`payHistory${payHistoryID}`;
  payHistoryCard.className = 'payHistoryCards';
  

  //FIXME
  //INSERT THE PAY DATA HERE
  payHistoryCard.innerHTML = `

  <h2>Pay Record ${payHistoryID} </h2>
    <p>Worked Hours:  ${payInstance._regularHours}</p>
    <p>Pay Rate:  ${payInstance._regularPayRate}</p>
    <p>State: ${payInstance._stateAbbreviation}</p>
  <br>

  `;
  //
  
  document.body.appendChild(payHistoryCard);
  payHistoryID++;
  
}

