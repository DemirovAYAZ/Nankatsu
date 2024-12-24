import React from 'react'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip,Legend} from 'chart.js';
import { Line } from 'react-chartjs-2'
const LineGraph = () => {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const options = {
    responsive: true,
    };

    // const   data={
    //     labels: ['Jun', 'Jul', 'Aug',"test2","test3","test4"],
    //     datasets: [
    //       {
    //         id: 1,
    //         label: 'steps',
    //             data: [5,7,2,4,5,3],
    //         borderColor:"rgba(0,0,0)"
    //         },
    //         {
    //             id: 1,
    //             label: 'steps',
    //                 data: [1,4,7,6,7,3],
    //             borderColor:"rgba(0,0,255)"
    //           },
  
    //     ],
    //   }
  return (
      <div style={{width:"50%"}}>
          <Line options={options} data={data}/>
    </div>
  )
}

export default LineGraph