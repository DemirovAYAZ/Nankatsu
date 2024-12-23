import React, { useEffect, useState } from 'react'
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2'
import { fetchData } from '../../services/fetch';
// const data = {
//     labels: [
//         "January", 
//         "February", 
//         "March", 
//         "April", 
//         "May", 
//         "June", 
//         "July", 
//         "August", 
//         "September", 
//         "October", 
//         "November", 
//         "December"],
//     datasets: [
//         {
//             id: 1,
//             label: 'Revenue',
//             data: [5, 7, 2, 4, 5, 8,5,7,3,6,2,4],
//             borderColor: "rgba(0,0,0)",
//             backgroundColor: 'rgba(0,0,0)',
//         },
//         {
//             id: 2,
//             label: 'Revenue',
//             data: [1, 4, 7, 6, 7, 3,7,4,3,8,2,5],
//             borderColor: "rgba(0,0,0)",
//             backgroundColor: 'rgba(0,0,255)',
            
//         },

//     ],
// };
// const months = [
//     "January", 
//     "February", 
//     "March", 
//     "April", 
//     "May", 
//     "June", 
//     "July", 
//     "August", 
//     "September", 
//     "October", 
//     "November", 
//     "December"
//   ];
  
// const mock = [1, 2, 4, 3, 7, 1, 6];
const options = {
    responsive:true
};
const BarGraph = () => {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    
    const [chartData, setChartData] = useState({labels:[],datasets:[]});


    async function getData() {
        const resData = await fetchData('http://10.121.128.76:8000/data', "GET");
        // console.log(resData.data);
        if (resData.status === 200) { 
            setChartData(resData?.data);
        }
        return
    }


    useEffect(() => {
        getData();
    },[])

    
       
  return (
      <div >
          <Bar options={options} data={chartData}/>
    </div>
  )
}

export default BarGraph