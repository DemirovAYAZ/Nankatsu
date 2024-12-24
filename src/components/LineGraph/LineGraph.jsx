import React from 'react'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip,Legend} from 'chart.js';
import { Line } from 'react-chartjs-2'
const LineGraph = ({options,data}) => {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


  return (
      <div>
          <Line options={options} data={data}/>
    </div>
  )
}

export default LineGraph