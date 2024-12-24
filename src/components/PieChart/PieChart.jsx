import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data, options }) => {
  ChartJS.register(ArcElement, Tooltip, Legend); 

  return (
    <div>
      <Pie options={options} data={data} />
    </div>
  );
};

export default PieChart;
