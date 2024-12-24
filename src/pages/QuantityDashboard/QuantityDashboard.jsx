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
    
      transactions.forEach((transaction) => {
        const category = transaction.Product_category;
        const sales = transaction.Total_Sales;
    
        if (categorySales[category]) {
          categorySales[category] += sales;
        } else {
          categorySales[category] = sales;
        }
      });
    
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
    
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
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
          <div className={styles.graph_border}>
<p style={{fontSize:"30px",fontWeight:'600',padding:"20px 0px"}}>Quantity of Top Products</p>
        <PieChart options={options} data={data}/>
          </div>

        </div>
        <div>
          
        </div>
      </div>
  )
}

export default QuantityDashboard
