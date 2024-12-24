import React from 'react'
import ManageAccounts from '../../components/ManageAccounts/ManageAccounts'
import HomeEnter from '../../components/HomeEnter/HomeEnter'
import Banner from '../../components/Banner/Banner'
import AccordionSection from '../../components/AccordionSection/AccordionSection'
import FeatureComponent from '../../components/FeatureComponent/FeatureComponent'

const Home = () => {
  return (
    <div className='container_home'>
      <HomeEnter />
      <Banner/>
      <ManageAccounts />
      <FeatureComponent />
      <AccordionSection />
    </div>
  )
}

export default Home
