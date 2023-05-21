import React from 'react'
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(0,0,255)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};
const PieChart = () => {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};
export default PieChart;