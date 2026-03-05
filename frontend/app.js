//Button Elements
let incomeButton = document.getElementById('add-income-btn');
let expenseButton = document.getElementById('add-expense-btn');
let submitButton = document.getElementById('submit-btn');
let cancelButton = document.getElementById('cancel-btn');
//Balance Display Element
let balanceDisplay = document.getElementById('balance');
//User Input Elements
let inputBox = document.getElementById('input-box');
let amountInput = document.getElementById('amount-input');
//Balance Variable
let balance = 0;
let transactionType = '';

//Button Event Listeners
incomeButton.addEventListener('click', function() {
    inputBox.classList.remove('hidden');
    transactionType = 'income';
});

expenseButton.addEventListener('click', function(){ 
    inputBox.classList.remove('hidden');
    transactionType = 'expense';
});

submitButton.addEventListener('click', function() {
    let amount = Number(amountInput.value);
    if (transactionType === 'income') {
        balance += amount;
    } else {
        balance -= amount;
    }
    balanceDisplay.textContent = '$' + balance;
    amountInput.value = '';
    inputBox.classList.add('hidden');
    transactionType = '';
});

cancelButton.addEventListener('click', function() {
    amountInput.value = '';
    inputBox.classList.add('hidden');
    transactionType = '';
});