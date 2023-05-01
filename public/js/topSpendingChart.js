const Data = require('../models/Data');

// Retrieve data for the chart
const getDataForSpendingChart = async (userId) => {
  try {
    const data = await Data.findAll({
      where: { user_id: userId },
      attributes: ['category', [sequelize.fn('sum', sequelize.col('cost')), 'total']],
      group: ['category'],
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

// Use the data to create the chart
const createChart = async (userId) => {
  try {
    const data = await getDataForSpendingChart(userId);
    const labels = data.map((item) => item.category);
    const values = data.map((item) => item.total);
    // Get the canvas element and create the chart
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
  } catch (err) {
    console.log(err);
  }
};

