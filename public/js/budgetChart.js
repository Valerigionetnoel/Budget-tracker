function createBudgetChart(data) {
    const transactionData = data.data.reduce((sum, item) => sum + item.total, 0)
    const remainingBudget = data.userBudget - transactionData;
    const labels = data.map((item) => item.category);
    const values = data.map((item) => item.total);
    const canvas = document.getElementById('otherChart');
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'My Chart',
            data: values,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  
async function fetchBudgetChartData() {
    const response = await fetch('/budget-chart-data');
    console.log(response);
    const data = await response.json();
    createBudgetChart(data);
  }

fetchBudgetChartData

