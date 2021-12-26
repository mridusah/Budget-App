//select elements
const balanceE1 = document.querySelector(".balance .value");
const incomeTotalE1 = document.querySelector(".income-total");
const outcomeTotalE1 = document.querySelector(".outcome-total");
const incomeE1 = document.querySelector("#income");
const expenseE1 = document.querySelector("#expense");
const allE1 = document.querySelector("#all");
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#outcome .list");
const allList = document.querySelector("#all .list");

//Select BTNS
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab12");
const allBtn = document.querySelector(".tab3");

//Input BTS
const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.querySelector(".expense-title-input");
const expenseAmount = document.querySelector(".expense-amount-input");

const addIncome = document.querySelector(".add-income");
const incomeTitle = document.querySelector(".income-title-input");
const incomeAmount = document.querySelector(".income-amount-input");

//Variables
let ENTRY_LIST = [];
let balance = 0, income = 0, outcome = 0;

const DELETE = "delete", EDIT = "edit";

//EVENT LISTENERS
expenseBtn.addEventListener("click", function(){
    show(expenseE1);
    hide( [incomeE1, allE1] );
    active(expenseBtn);
    inactive( [incomeBtn, allBtn] );
})
incomeBtn.addEventListener("click", function(){
    show(incomeE1);
    hide( [expenseE1, allE1] );
    active(incomeBtn);
    inactive( [expenseBtn, allBtn] );
})
allBtn.addEventListener("click", function(){
    show(allE1);
    hide( [incomeE1, expenseE1] );
    active(allBtn);
    inactive( [incomeE1, expenseE1] );
})

addExpense.addEventListener("click", function(){
    //If one of the input is empty, then exit
    if (!expenseTitle.value || !expenseAmount.value ) return;
    
    //save the entry to ENTRY_LIST
    let expense = {
        type : "expense",
        title : expenseTitle.value,
        amount : expenseAmount.value
    }
    ENTRY_LIST.push(expense);
})

addIncome.addEventListener("click", function(){
    //If one of the input is empty, then exit
    if (!incomeTitle.value || !incomeAmount.value ) return;
    
    //save the entry to ENTRY_LIST
    let income = {
        type : "expense",
        title : incomeTitle.value,
        amount : incomeAmount.value
    }
    ENTRY_LIST.push(income);
})

//HELPERS
function show(element) {
    element.classList.remove("hide");
}

function hide(elements) {
    elements.forEach(element => {
        element.classList.add("hide");
    })
}

function active(element) {
    element.classList.add("active");
}

function inactive(elements) {
    elements.forEach(element => {
        element.classList.remove("active");
    })
}





