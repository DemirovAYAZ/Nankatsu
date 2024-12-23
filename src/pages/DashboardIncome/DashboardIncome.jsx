import React from 'react'
import BarGraph from '../../components/BarGraph/BarGraph'
import styles from './styles.module.css'
import { incomesData } from '../../mockdata';
const DashboardIncome = () => {

  const data = incomesData[0];
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