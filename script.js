// variables
const billEl = document.getElementById('bill'),
      formEl = document.getElementById('form'),
      rateEl = document.getElementById('rate'),
      buttonEl = document.querySelector('.btn');
     

const displayError = (message) => {
    const errorEl = document.querySelector('.error');
    errorEl.innerText = message;
    errorEl.style.display = 'block';
    setTimeout(() => {
        errorEl.style.display = 'none';
    },3000);
}


const displayResult = (billValue , rateValue) => {
      let tip =0 , total = 0;
      const tipEl = document.querySelector('.tip');
      const totalEl = document.querySelector('.total');

      tip = Math.ceil((billValue * rateValue)/100);
      tipEl.innerText = `Tip: ${tip}`;

      totalBill = tip + billValue;
      totalEl.innerText = `Total Bill: ${totalBill}`;


}
const calculateTip = () => {
    const billValue = parseInt(billEl.value);
    const rateValue = parseInt(rateEl.value);

    if(isNaN(billValue)){
        displayError('Please enter a valid number in bill');
    }
    else if(rateValue === 0){
        displayError('Please select valid service rate');
    }

    displayResult(billValue,rateValue);
}


// adding event listener to the button
buttonEl.addEventListener('click', calculateTip);
