import React from 'react'
import styles from './styles.module.css'
import { customerCount } from '../../mockdata';
import BarGraph from '../../components/BarGraph/BarGraph';

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        generateLabels: function (chart) {
          return chart.data.labels.map((label, index) => ({
            text: label,
            fillStyle: chart.data.datasets[0].backgroundColor[index], // Use dataset colors as background
           
           
          }));
        },
      },
    },
  },
};

const CustomerTypeDashboard = () => {
    const data = customerCount;

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

export default CustomerTypeDashboard
