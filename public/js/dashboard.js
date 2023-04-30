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
            document.location.replace('/data')
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

  document.querySelector('#transactionForm')
  .addEventListener('submit', newTransactionFormHandler);

  document.querySelector('.transaction-list')
  .addEventListener('click', delTransaction);