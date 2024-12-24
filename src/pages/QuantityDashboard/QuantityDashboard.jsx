import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import {  Tranzaction } from '../../mockdata';
import PieChart from '../../components/PieChart/PieChart';

const QuantityDashboard = () => {
    const [data, setData] = useState({
      labels: "",
      datasets: []
    });
    const mapCategoriesForPieChart = (transactions) => {
      const categorySales = {};
    
      // Aggregate total sales by category
      transactions.forEach((transaction) => {
        const category = transaction.Product_category;
        const sales = transaction.Total_Sales;
    
        if (categorySales[category]) {
          categorySales[category] += sales;
        } else {
          categorySales[category] = sales;
        }
      });
    
      // Convert aggregated data into labels and dataset for the chart
      const labels = Object.keys(categorySales);
      const data = Object.values(categorySales);
    
      return {
        labels,
        datasets: [
          {
            data,
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4CAF50",
              "#F14A55",
              "#8E44AD",
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4CAF50",
              "#F14A55",
              "#8E44AD",
            ],
          },
        ],
      };
    };
    
    // Prepare options for the pie chart
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            // Add percentage to the tooltip
            label: (tooltipItem) => {
              const dataset = tooltipItem.dataset;
              const total = dataset.data.reduce((sum, value) => sum + value, 0);
              const value = dataset.data[tooltipItem.dataIndex];
              const percentage = ((value / total) * 100).toFixed(2);
              return `${tooltipItem.label}: ${value} (${percentage}%)`;
            },
          },
        },
      },
    };
  useEffect(() => {
    const transaction = Tranzaction;
    const pieChartData = mapCategoriesForPieChart(transaction);
    setData(pieChartData)
  }, []);
  
  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: "top",
  //     },
  //     tooltip: {
  //       enabled: true,
  //     },
  //   },
  // };
  return (
        <div className={styles.income_page}>
        <div >
        <PieChart options={options} data={data}/>

        </div>
        <div>
          
        </div>
      </div>
  )
}

export default QuantityDashboard
