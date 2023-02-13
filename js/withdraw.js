// added event handler with id
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log("ballll");
    //step-2: get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    // also make use to convert the input into a number by string parsefloat
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);
    
    // Nan validation
    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number')
        return;
    }

    // step-3: get previous withdraw total
    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal);



    // step-5: get the previous total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // console.log(previousBalanceTotal);



     // step-7: remove input value
     withdrawField.value = "";

    // check validation problem
    if (newWithdrawAmount > previousBalanceTotal) {
        alert("insufficient Balance")
        return;
    }
    // step-4: calculate total withdraw amount + step-4: set total withdraw amount

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    WithdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6: calculate new balance total  // 5-6 set the new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

   



})

