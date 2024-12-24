import React, { useEffect, useState } from 'react';
import BarGraph from '../../components/BarGraph/BarGraph';
import styles from './styles.module.css';

import { incomesData, Tranzaction } from '../../mockdata';
const months = [
  "January", "February", "March", "April", "May", 
  "June", "July", "August", "September", "October", 
  "November", "December"
];
const DashboardIncome = () => {
  const [data, setData] = useState({
    labels: "",
    datasets: []
  });
  // const data = incomesData[0];

  function transformDataToChart(transactions) {
  
    // Initialize an array to store sales for each month
    const salesData = new Array(12).fill(0);
  
    // Aggregate sales by month
    transactions.forEach((transaction) => {
      const date = new Date(transaction.Date);
      const monthIndex = date.getMonth(); // Month index (0-11)
      salesData[monthIndex] += transaction.Total_Sales;
    });
  
    // Return the transformed chart data
    return {
      labels: months,
      datasets: [
        {
          id: 1,
          label: 'Sales',
          data: salesData,
          borderColor: "#007D57", 
          backgroundColor: "#CF3A4B",
          fill: true,
          borderWidth: 2,
        },
      ],
    };
  }
  
  useEffect(() => {
    const transaction = Tranzaction
    const chartData = transformDataToChart(transaction);
  setData(chartData)
},[])
  const options = {
    responsive:true
  }
  return (
    <div className={styles.income_page}>
      <div >
      <BarGraph options={options} data={data} />
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default DashboardIncome