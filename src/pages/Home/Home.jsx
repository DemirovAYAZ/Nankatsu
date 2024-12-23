import React from 'react'
import ManageAccounts from '../../components/ManageAccounts/ManageAccounts'
import HomeEnter from '../../components/HomeEnter/HomeEnter'
import Banner from '../../components/Banner/Banner'
import AccordionSection from '../../components/AccordionSection/AccordionSection'

const Home = () => {
  return (
    <div>
      <HomeEnter />
      <Banner/>
      <ManageAccounts />
      <AccordionSection />
    </div>
  )
}

export default Home
