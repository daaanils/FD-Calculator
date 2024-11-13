function calculateMaturityAmount (){

    //get input values from the form elements
    
    const principle = parseFloat(document.querySelector('#principle').value);
    const interest = parseFloat(document.querySelector('#interest').value);
    const tenure = parseFloat(document.querySelector('#tenure').value);

    // perform the calculation
    
    const maturityAmount = principle + (principle * interest * tenure)/100;

    // display the result

    const resultElement = document.querySelector('#result')
    
    resultElement.innerText = `${maturityAmount.toFixed(2)}`;

    //Apply CSS
    resultElement.style.fontWeight = 'bold';
}

//Attach the event listner to the calculate Button

document.querySelector('#calculateBtn').addEventListener('click', calculateMaturityAmount);