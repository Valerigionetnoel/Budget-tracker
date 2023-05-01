const Data = require('../../models/Data')
const Chart = require('chart.js');
const canvas = document.getElementById('dataChartTest');
const ctxx = canvas.getContext('2d');

const data = Data.findAll({
  attributes: ['purchase_name', 'cost']
});

const chartData = {
  labels: data.map(d => d.purchase_name),
  datasets: [
    {
      label: 'Values',
      data: data.map(d => d.cost),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }
  ]
};

const myChart = new Chart(ctxx, {
  type: 'pie',
  data: chartData
});