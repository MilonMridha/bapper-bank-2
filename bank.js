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
