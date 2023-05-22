import React from 'react'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'

const OrgContriBarChart = ({ orgContri }) => {
  if(!orgContri) {
    return <p>Loading.. nahi hh.</p>
  }

  const labels = Object.keys(orgContri)
  const data = Object.values(orgContri)

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Contributions',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(0, 0, 0)',
        data: data,
      },
    ],
  }

  return (
    <div className='m-12'>
      <div className='text-center text-4xl text-bold my-6'>Contributions to Repositories</div>

      <Bar data={chartData} className=' bg-goldenyellow p-2 rounded-4xl my-12' />
    </div>
  )
}

export default OrgContriBarChart

