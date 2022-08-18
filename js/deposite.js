document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposite-field');
    const newDepositAmountString = depositField.value;
    const newDepostitAmount = parseFloat(newDepositAmountString);


    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepostitAmount;

    depositTotalElement.innerText = currentDepositTotal;


    // balance set current total

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceTotalString);

    // calculate current balance
    const currentBalanceTotal = previousDepositTotal + newDepostitAmount;
    // set the balance total 
    balanceTotal.innerText = currentBalanceTotal;

    depositField.value = '';

})