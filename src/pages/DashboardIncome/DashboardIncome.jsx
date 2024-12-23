import React from 'react'
import BarGraph from '../../components/BarGraph/BarGraph'
import styles from './styles.module.css'
const DashboardIncome = () => {
  return (
    <div className={styles.income_page}>
      <div >
      <BarGraph/>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default DashboardIncome