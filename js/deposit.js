// step-1: add events listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('button click')
    // step-2: get the deposit amount from the deposit field
    // for input field use .value to the inside the input field
    const depositFiled = document.getElementById('deposit-field');
    const newDepositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(typeof newDepositAmount);
    // console.log(depositAmount);

    // step-3: get the current deposit total amount
    // for non-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousAmount = parseFloat(previousDepositTotalString);
    // console.log(typeof previousAmount);
    // console.log(depositTotal);
       
    //  step-4: add numbers to set the total deposit
    const currentDepositTotal = previousAmount + newDepositAmount;
     
    //  set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step-5 get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //  set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    // step-7: clear deposit field
    depositFiled.value = '';
   

})