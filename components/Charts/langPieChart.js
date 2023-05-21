import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
const generateRandomColor = () => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

const LangPieChart = ({ languages }) => {
  if (!languages) {
    return <p>Loading...</p>;
  }

  const labels = Object.keys(languages);
  const backgroundColors = labels.map(() => generateRandomColor());
  const data = Object.values(languages);


  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Language',
        backgroundColor: backgroundColors,
        borderColor: 'rgb(0, 0, 0)',
        data: data,
      },
    ],
  };


  return (
    <div>
      <h2>Languages Used in Personal Repositories</h2>
      <Pie data={chartData}  />
    </div>
  );
};

export default LangPieChart;
