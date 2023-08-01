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
        label: 'Language', // Repo will be preferrable
        backgroundColor: backgroundColors,
        borderColor: 'rgb(0, 0, 0)',
        data: data,
      },
    ],
  };

  return (
    <div className='m-12'>
      <div className='text-center text-4xl text-bold my-6'>Languages Used in Personal Repositories</div>
      <Pie data={chartData} className=' bg-goldenyellow p-4 rounded-4xl my-12'  />
    </div>
  );
};

export default LangPieChart;
