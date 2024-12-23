import React, { useEffect, useState } from 'react'
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2'
import { fetchData } from '../../services/fetch';
const data = {
    labels: ['Jun', 'Jul', 'Aug', "test2", "test3", "test4"],
    datasets: [
        {
            id: 1,
            label: '',
            data: [5, 7, 2, 4, 5, 3],
            borderColor: "rgba(0,0,0)",
            backgroundColor: 'rgba(0,0,0)',
        },
        {
            id: 1,
            label: 'steps',
            data: [1, 4, 7, 6, 7, 3],
            borderColor: "rgba(0,0,0)",
            backgroundColor: 'rgba(0,0,255)',
            
        },

    ],
};
const months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
  ];
  
const mock = [1, 2, 4, 3, 7, 1, 6];
const options = {
    responsive:true
};
const BarGraph = () => {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    
    const [chartData, setChartData] = useState({});


    async function getData() {
        const resData = await fetchData('https://b35c-85-132-107-241.ngrok-free.app/data', "GET", "");
        console.log(resData);
        
    }
    useEffect(() => {
        getData();
    },[])

    
       
  return (
      <div style={{width:"50%"}}>
          <Bar options={options} data={data}/>
    </div>
  )
}

export default BarGraph