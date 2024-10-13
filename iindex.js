const budgetForm = document.getElementById('budgetForm');
const budgetAmount = document.getElementById('budgetAmount');
const budgetSlider = document.getElementById('budgetSlider');
const budgetBar = document.getElementById('budgetBar');
const budgetDisplay = document.getElementById('budgetDisplay');
const remainingBudgetDisplay = document.getElementById('remainingBudgetDisplay');

let budget = 0;
let remainingBudget = 0;

budgetForm.addEventListener('submit', (e) => {
  e.preventDefault();
  budget = parseFloat(budgetAmount.value);
  remainingBudget = budget;
  updateBudgetDisplay();
  updateBudgetBar();
});

budgetSlider.addEventListener('input', () => {
  budget = parseFloat(budgetSlider.value);
  remainingBudget = budget;
  updateBudgetDisplay();
  updateBudgetBar();
});

function updateBudgetDisplay() {
  budgetDisplay.textContent = `Budget: $${budget.toFixed(2)}`;
  remainingBudgetDisplay.textContent = `Remaining: $${remainingBudget.toFixed(2)}`;
}

function updateBudgetBar() {
  const budgetPercentage = (remainingBudget / budget) * 100;
  budgetBar.style.width = `${budgetPercentage}%`;
}