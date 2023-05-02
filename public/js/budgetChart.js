function createBudgetChart(data) {
    const transactionData = data.data.reduce((sum, item) => sum + item.total, 0)
    const remainingBudget = data.userBudget - transactionData;
    const canvas = document.getElementById('otherChart');
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [
            'Budget Space',
            'Transactions'
        ],
        datasets: [
          {
            label: 'Remaining Budget',
            data: [
                remainingBudget,
                transactionData,
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
              ],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
          },
        });
}
    
  
async function fetchBudgetChartData() {
    const response = await fetch('/budget-chart-data');
    console.log(response);
    const data = await response.json();
    createBudgetChart(data);
  }

fetchBudgetChartData();

