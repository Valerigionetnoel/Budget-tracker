async function fetchTransactions() {
    const response = await fetch('/api/data');
    const transactions = await response.json();
  }
  
  fetchTransactions();