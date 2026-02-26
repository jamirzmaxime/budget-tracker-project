
let incomeButton = document.getElementById('add-income-btn');
let expenseButton = document.getElementById('add-expense-btn');
let balanceDisplay = document.getElementById('balance');

let balance = 0;

incomeButton.addEventListener("click", function() {
    let amount = prompt('Enter income amount: ')
    amount = Number(amount);
    balance += amount;
    balanceDisplay.textContent = '$' + balance;
});

expenseButton.addEventListener("click", function(){ 
    let amount = prompt('Enter expense amount: ')
    amount = Number(amount);
    balance -= amount;
    balanceDisplay.textContent = '$' + balance;
});