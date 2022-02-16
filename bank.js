document.getElementById('deposit-button').addEventListener('click', function (){
const depositInput = document.getElementById('deposit-input');
const depositInputText = depositInput.value;
const depositInputAmount = parseFloat(depositInputText);
//deposit Total-------------
const depositTotal = document.getElementById('deposit-total');
const previousDepositTotalText = depositTotal.innerText;
const previousDepositAmount = parseFloat(previousDepositTotalText);
depositTotal.innerText = previousDepositAmount + depositInputAmount;
depositInput.value = '';
//total balane update
const totalBalance = document.getElementById('balance-total');
const previousTotalBalanceText = totalBalance.innerText;
const previousTotalBalance = parseFloat(previousTotalBalanceText);
totalBalance.innerText = previousTotalBalance + depositInputAmount;
});
//withdraw handle button
document.getElementById('withdraw-button').addEventListener('click', function (){ const withdrawInput = document.getElementById('withdraw-input');
const withdrawInputText = withdrawInput.value;
const withdrawInputAmount = parseFloat(withdrawInputText);
//withdraw Total update
const withdrawTotal = document.getElementById('withdraw-total');
const withdrawTotalText = withdrawTotal.innerText;
const previousWithdrawAmount = parseFloat(withdrawTotalText);
withdrawTotal.innerText = previousWithdrawAmount + withdrawInputAmount;
// update Total withdrawBalance
const totalBalance = document.getElementById('balance-total');
const previousWithdrawBalanceText = totalBalance.innerText;
const previousWithdrawTotalAmount = parseFloat(previousWithdrawBalanceText);
totalBalance.innerText = previousWithdrawTotalAmount - withdrawInputAmount;
withdrawInput.value = '';
});