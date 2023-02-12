// step 1: add events listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('button click')
    // step 2: get the deposit amount from the deposit field
    // for input field use .value to the inside the input field
    const depositFiled = document.getElementById('deposit-field');
    const depositAmount = depositFiled.value;
    // console.log(depositAmount);

    // step 3: get the current deposit total amount
    // for non-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    // console.log(depositTotal);
    depositTotalElement.innerText = depositAmount;

})