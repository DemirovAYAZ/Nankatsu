import React from 'react'
import ManageAccounts from '../../components/ManageAccounts/ManageAccounts'
import HomeEnter from '../../components/HomeEnter/HomeEnter'
import Banner from '../../components/Banner/Banner'

const Home = () => {
  return (
    <div>
      <HomeEnter />
      <Banner/>
      <ManageAccounts />
    </div>
  )
}

export default Home
