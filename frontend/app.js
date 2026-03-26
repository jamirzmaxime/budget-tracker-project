//Button Elements
const incomeButton = document.getElementById('add-income-btn');
const expenseButton = document.getElementById('add-expense-btn');
const submitButton = document.getElementById('submit-btn');
const cancelButton = document.getElementById('cancel-btn');
//Balance Display Element
const balanceDisplay = document.getElementById('balance');
//User Input Elements
const inputBox = document.getElementById('input-box');
const amountInput = document.getElementById('amount-input');
const categorySelect = document.getElementById('category-select');
const dateInput = document.getElementById('date-input');

let balance = 0;   // Current total balance
let transactionType = '';   // Transaction type: 'income' or 'expense'

const transactions = JSON.parse(localStorage.getItem('transactions')) || [];    // Transaction history
const savedTransactions = JSON.parse(localStorage.getItem('transactions')) || []; // Retriving transactions from local storage

// Local storage retrival of transactions and balance update

if (savedTransactions.length > 0) {
    savedTransactions.forEach(transaction => {
        appendTransaction(transaction.type, transaction.amount, transaction.category, transaction.date);
    

        if (transaction.type === 'income') {
            balance += transaction.amount;
        } else {
            balance -= transaction.amount;
        }
    });
        
        balanceDisplay.textContent = '$' + balance;
}

function saveTransactions() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

//Button Event Listeners

// Shows input box for income 
incomeButton.addEventListener('click', function() {
    inputBox.classList.remove('hidden');
    incomeButton.classList.add('hidden');
    expenseButton.classList.add('hidden');
    transactionType = 'income';
});

// Shows input box for expense
expenseButton.addEventListener('click', function(){ 
    inputBox.classList.remove('hidden');
    expenseButton.classList.add('hidden');
    incomeButton.classList.add('hidden');
    transactionType = 'expense';
});

// Handles value submission and updates balance
submitButton.addEventListener('click', function() {
    let amount = Number(amountInput.value);
    if (transactionType === 'income') {
        balance += amount;
    } else {
        balance -= amount;
    }
    balanceDisplay.textContent = '$' + balance;
    appendTransaction(transactionType, amount, categorySelect.value, dateInput.value);
    saveTransactions();
    amountInput.value = '';
    inputBox.classList.add('hidden');
    incomeButton.classList.remove('hidden');
    expenseButton.classList.remove('hidden');
    transactionType = '';
});

// Handles cancellation of input and hides input box
cancelButton.addEventListener('click', function() {
    amountInput.value = '';
    inputBox.classList.add('hidden');
    incomeButton.classList.remove('hidden');
    expenseButton.classList.remove('hidden');
    transactionType = '';
});
// Function to append transaction details to the transaction list
function appendTransaction(type, amount, category, date) {
    const transaction = {
        type: type,
        amount: amount,
        category: category,
        date: date
    };
    transactions.push(transaction);
    const transactionList = document.getElementById('transaction-list');
    
    // Remove "No transactions yet" message if trasactions exist
    const noTransactionMessage = transactionList.querySelector('p');
    if (noTransactionMessage) {
        noTransactionMessage.remove();
    }

    const newTransaction = document.createElement('li');
    newTransaction.textContent = `${date} - ${type.charAt(0).toUpperCase() + type.slice(1)}: $${amount} (${category})`;
    transactionList.appendChild(newTransaction);
}