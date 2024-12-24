import React, { useEffect, useState } from 'react';

import styles from './styles.module.css'
import {  Tranzaction } from '../../mockdata';
import BarGraph from '../../components/BarGraph/BarGraph';

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        generateLabels: function (chart) {
          return chart.data.labels.map((label, index) => ({
            text: label,
            fillStyle: chart.data.datasets[0].backgroundColor[index], 
           
           
          }));
        },
      },
    },
  },
};

const CustomerTypeDashboard = () => {

  const [barData, setBarData] = useState({
    labels: "",
    datasets: []
  });

  function transformToCustomerTypeChart(transactions) {
    // Create a mapping of customer types with total sales
    const customerTypeSales = {};
  
    transactions.forEach((transaction) => {
      const { Customer_Type, Total_Sales } = transaction;
  
      if (customerTypeSales[Customer_Type]) {
        customerTypeSales[Customer_Type] += Total_Sales;
      } else {
        customerTypeSales[Customer_Type] = Total_Sales;
      }
    });
  
    // Extract labels and data
    const labels = Object.keys(customerTypeSales);
    const data = Object.values(customerTypeSales);
  
    // Assign colors dynamically (you can customize these)
    const backgroundColor = ["#F14A55", "#4CAF50", "#2196F3", "#FFC107"]; // Add more colors as needed
  
    // Return chart data
    return {
      labels,
      datasets: [
        {
          id: 1,
          label: "Customer Types",
          data,
          backgroundColor: backgroundColor.slice(0, labels.length), // Ensure enough colors for labels
        },
      ],
    };
  }
  
  // Example usage:
    useEffect(() => {
      const transaction = Tranzaction;
      const chartData = transformToCustomerTypeChart(transaction);

    setBarData(chartData)
  },[])


  return (
    <div className={styles.income_page}>
      <div >
      <BarGraph options={options} data={barData} />
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default CustomerTypeDashboard
