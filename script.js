let expenses = [];
let totalAmount=0;

const expenseNameip = document.getElementById('expense-name');
const expenseAmountip = document.getElementById('expense-amount');
const expenseDateip = document.getElementById('expense-date');
const addBtn = document.getElementById('add-btn');

const tableBody = document.getElementById('table-body');
const totalCell = document.getElementById('total-amount');


addBtn.addEventListener('click',function() {
const expenseName = expenseNameip.value;
const expenseAmount = Number(expenseAmountip.value);
const expenseDate = expenseDateip.value;


if(expenseName === '')
{
  alert('enter the text!!!!!');
  return;
}
if(isNaN(expenseAmount) || expenseAmount<=0)
{
  alert('enter the valid number!!!!!!!!!');
  return;
}
if(expenseDate === '')
{
  alert('select the date');
  return;
}

expenses.push({expenseName,expenseAmount,expenseDate});

totalAmount += expenseAmount;
totalCell.textContent = totalAmount;

const newRow = tableBody.insertRow(); 

const expenseNameCell = newRow.insertCell();
const expenseAmountCell = newRow.insertCell();
const expenseDateCell = newRow.insertCell();

expenseNameCell.textContent = expenseName;
expenseAmountCell.textContent = expenseAmount;
expenseDateCell.textContent = expenseDate;

expenseNameip.value = '';
expenseAmountip.value = '';
expenseDateip.value = '';
})
