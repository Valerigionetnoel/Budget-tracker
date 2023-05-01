function createTransactionTableRow(transaction) {
  const row = document.createElement('tr');
  row.classList.add('bg-gray-50');

  const userIdCell = document.createElement('td');
  userIdCell.classList.add('user-cell', 'whitespace-nowrap');
  userIdCell.textContent = transaction.user_id;

  const createdAtCell = document.createElement('td');
  createdAtCell.classList.add('date-cell', 'whitespace-nowrap');
  createdAtCell.textContent = transaction.createdAt;

  const companyNameCell = document.createElement('td');
  companyNameCell.classList.add('company-cell', 'whitespace-nowrap');
  companyNameCell.textContent = transaction.purchase_name;

  const costCell = document.createElement('td');
  costCell.classList.add('amount-cell', 'whitespace-nowrap');
  costCell.textContent = transaction.cost;

  const categoryCell = document.createElement('td');
  categoryCell.classList.add('category-cell', 'whitespace-nowrap');
  categoryCell.textContent = transaction.category;

  const noteCell = document.createElement('td');
  noteCell.classList.add('notes-cell', 'whitespace-nowrap');
  noteCell.textContent = transaction.note;

  const emotionCell = document.createElement('td');
  emotionCell.classList.add('emotion-cell', 'whitespace-nowrap');
  emotionCell.textContent = transaction.emotion;

  const buttonCell = document.createElement('td');
  buttonCell.classList.add('button-cell', 'whitespace-nowrap');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  buttonCell.appendChild(deleteButton);

  row.appendChild(userIdCell);
  row.appendChild(createdAtCell);
  row.appendChild(companyNameCell);
  row.appendChild(costCell);
  row.appendChild(categoryCell);
  row.appendChild(noteCell);
  row.appendChild(emotionCell);
  row.appendChild(buttonCell);

  return row;
}

const newTransactionFormHandler = async (event) => {
    event.preventDefault();

    const company = document.querySelector('#companyName').value.trim();
    const amount = document.querySelector('#amountPurchase').value.trim();
    const category = document.querySelector('#categoryOfPurchase').value.trim();
    const notes = document.querySelector('#purchaseNote').value.trim();
    const emotion = document.querySelector('#emotionalPurchase').value.trim();

    if (company && amount && category && notes && emotion) {
      const response = await fetch(`/api/data`, {
        method: 'POST',
        body: JSON.stringify ({ purchase_name,
          cost,
          category,
          note,
          emotion 
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const transaction = await response.json();
        const tableBody = document.querySelector('#transaction-list tbody');
        const newRow = createTransactionTableRow(transaction);
        tableBody.appendChild(newRow);
        document.location.replace('/data');
      } else {
            alert('Failed to create project');
          }
}};    

const delTransaction= async (event) => {
    if (event.target.hasAttribute('data_id')) {
      const id = event.target.getAttribute('data_id');
  
      const response = await fetch(`/api/data/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/data');
      } else {
        alert('Failed to delete project');
      }
    }
  };

  document.querySelector('#transactionModal').addEventListener('submit', newTransactionFormHandler);

  document.querySelector('#transaction-list').addEventListener('click', delTransaction);