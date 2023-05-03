
function createChart(data) {
  const labels = data.map((item) => item.category);
  const values = data.map((item) => item.total);
  const canvas = document.getElementById('myTransactionChart');
  const ctx = canvas.getContext('2d');
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'My Chart',
          data: values,
          backgroundColor:  [
            'lightGreen',
            'rgba(255, 99, 132, 0.2)',
            'rgba(245, 40, 145, 0.8)',
            'rgba(39, 245, 221, 0.8)',
            'rgba(245, 238, 39, 0.8)',
            'rgba(202, 136, 47, 0.8)',
          ],
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

async function fetchChartData() {
  const response = await fetch('/chart-data');
  console.log(response);
  const data = await response.json();
  createChart(data);
}

// Call the function to fetch the data and create the chart
fetchChartData();