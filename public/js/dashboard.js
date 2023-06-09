function createTransactionTableRow(transaction) {
  //appends to the table so the window is updated without the need of a reload
  const row = document.createElement('tr');
  row.classList.add('bg-gray-50');

  const userIdCell = document.createElement('td');
  userIdCell.classList.add('user-cell', 'whitespace-nowrap', 'p-3');
  userIdCell.textContent = transaction.user_id;

  const createdAtCell = document.createElement('td');
  createdAtCell.classList.add('date-cell', 'whitespace-nowrap', 'p-3');
  createdAtCell.textContent = moment(transaction.createdAt).format('ddd MMM DD');

  const productCell = document.createElement('td');
  productCell.classList.add('product-cell', 'whitespace-nowrap', 'p-3');
  productCell.textContent = transaction.product;

  const companyNameCell = document.createElement('td');
  companyNameCell.classList.add('company-cell', 'whitespace-nowrap', 'p-3');
  companyNameCell.textContent = transaction.purchase_name;

  const costCell = document.createElement('td');
  costCell.classList.add('amount-cell', 'whitespace-nowrap', 'p-3');
  costCell.textContent = transaction.cost;

  const categoryCell = document.createElement('td');
  categoryCell.classList.add('category-cell', 'whitespace-nowrap', 'p-3');
  categoryCell.textContent = transaction.category;

  const noteCell = document.createElement('td');
  noteCell.classList.add('notes-cell', 'whitespace-nowrap', 'p-3');
  noteCell.textContent = transaction.note;

  const emotionCell = document.createElement('td');
  emotionCell.classList.add('emotion-cell', 'whitespace-nowrap', 'p-3');
  emotionCell.textContent = transaction.emotion;

  const buttonCell = document.createElement('td');
  buttonCell.classList.add('deleteTransactionBtn', 'whitespace-nowrap', 'p-6', 'space-x-2', 'border-t', 'border-gray-200', 'rounded-b', 'dark:border-gray-600', 'font-bold');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  buttonCell.appendChild(deleteButton);
  
  row.appendChild(userIdCell);
  row.appendChild(productCell);
  row.appendChild(createdAtCell);
  row.appendChild(companyNameCell);
  row.appendChild(costCell);
  row.appendChild(categoryCell);
  row.appendChild(noteCell);
  row.appendChild(emotionCell);
  row.appendChild(buttonCell);

  return row;
}

//creates a new transaction for the user from the modal
const newTransactionFormHandler = async (event) => {
    event.preventDefault();

    const product = document.querySelector('#productName').value.trim();
    const company = document.querySelector('#companyName').value.trim();  
    const cost = document.querySelector('#amountPurchase').value.trim();
    const category = document.querySelector('#categoryOfPurchase').value.trim();
    const note = document.querySelector('#purchaseNote').value.trim();
    const emotion = document.querySelector('#emotionalPurchase').value.trim();

    if (product && company && cost && category && note && emotion) {
      const response = await fetch(`/api/data`, {
        method: 'POST',
        body: JSON.stringify ({ product, company, cost, category, note, emotion, }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const transaction = await response.json();
        const tableBody = document.querySelector('#transaction-list tbody');
        const newRow = createTransactionTableRow(transaction);
        tableBody.appendChild(newRow);
        location.reload();
      } else {
            alert('Failed to create project');
          }
}};    

// deletes a transaction by pressing the delete button
const delTransaction= async (event) => {
  event.preventDefault();
    if (event.target.hasAttribute('data_id')) {
      const id = event.target.getAttribute('data_id');
  
      const response = await fetch(`/api/data/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        const parentRow = event.target.closest('tr');
        parentRow.remove();
        location.reload();
      } else {
        alert('Failed to delete project');
      }
    }
  };

  document.querySelector('#transactionModal').addEventListener('submit', newTransactionFormHandler);
  
  document.querySelector('#transactionModalBtn').addEventListener('click', newTransactionFormHandler);

const deleteButtons = document.querySelectorAll('.deleteTransactionBtn');

deleteButtons.forEach((button) => button.addEventListener('click', delTransaction));
