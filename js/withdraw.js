document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldString);


    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawString = previousWithdrawElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);
    const currentWithdraw = previousWithdraw + newWithdrawAmount;

    previousWithdrawElement.innerText = currentWithdraw;



    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceTotalString);

    const currentTotal = previousBalance - newWithdrawAmount;
    balanceTotal.innerText = currentTotal;

    withdrawField.value = '';


})