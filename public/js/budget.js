

const newBudgetFormHandler = async (event) => {
    event.preventDefault();
  
    const income = document.querySelector('#income').value.trim();
    const savings = document.querySelector('#savings').value.trim();
    const desiredBudget = document.querySelector('#desiredBudget').value.trim();
  
    if (income && savings && desiredBudget) {
      const response = await fetch('/api/budget', {
        method: 'POST',
        body: JSON.stringify({ income, savings, desiredBudget }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        location.reload();
      } else {
        alert('Failed to create budget');
      }
    }
  };
  
  document.querySelector('#budgetCreationModal').addEventListener('submit', newBudgetFormHandler);
  document.querySelector('#budgetCreationbtn').addEventListener('click', newBudgetFormHandler);