import React, { useEffect, useState } from 'react'
import LineGraph from '../../components/LineGraph/LineGraph'
import styles from './styles.module.css';
// import {  Tranzaction } from '../../mockdata';

const options = {
    responsive: true,
};
// const months = [
//   "January", "February", "March", "April", "May", 
//   "June", "July", "August", "September", "October", 
//   "November", "December"
// ];
const Tranzaction=  {
  "Transaction": {
    "January,2024": 22797.95,
    "February,2024": 19879.05,
    "March,2024": 23495.60,
    "April,2024": 20975.10,
    "May,2024": 22613.75,
    "June,2024": 21046.95,
    "July,2024": 22870.60,
    "August,2024": 20986.25,
    "September,2024": 22574.35,
    "October,2024": 20524.35,
    "November,2024": 19935.35,
    "December,2024": 22524.35,
    "January,2025": 22426.29,
    "February,2025":21478.23,
    "March,2025": 23930.17,
    "April,2025": 21382.11,
    "May,2025": 22834.05,
    "June,2025":24285.99
}
}


    // const data={
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
const StrategyDashboard = () => {
  const [data, setData] = useState({
    labels: "",
    datasets: []
  });
  // const data = incomesData[0];

  const convertToLineChartData = (json) => {
    const labels = Object.keys(json["Transaction"]); // Ayları al
    const data = Object.values(json["Transaction"]); // Aylara karşılık gelen değerleri al
  
    return {
      labels,
      datasets: [
        {
          label: "Transactions", // Veri setinin etiketi
          data,
          borderColor: "#007D57", // Çizgi rengi
          backgroundColor: "#CF3A4B", // Alan rengi
          tension: 0.4, // Çizginin eğriliği
          fill: true, // Çizginin altında alanı doldur
        },
      ],
    };
  };
  
  // JSON verisini formatla
 
  
  useEffect(() => {
    const transaction = Tranzaction
    const lineChartData = convertToLineChartData(transaction);
  setData(lineChartData)
},[])
  return (
    <div className={styles.income_page}>
    <div >
    <LineGraph options={options} data={data}/>

    </div>
    <div>
      
    </div>
  </div>
  )
}

export default StrategyDashboard