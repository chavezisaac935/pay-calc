const displayPayment = (payInstance , id) => {
  let payHistoryCard = document.createElement("div");
  payHistoryCard.id =`payHistory${id}`;
  payHistoryCard.className = 'payHistoryCards';

  payHistoryCard.innerHTML = `

  <h2>Pay Record ${id + 1} </h2>
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
}


export const display = {
  displayPayment: displayPayment,
  deleteHistory: deleteHistory,
}