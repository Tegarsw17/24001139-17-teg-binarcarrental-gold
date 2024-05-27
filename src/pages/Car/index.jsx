import React from 'react'
import Navbar from '../../components/Navbar'
import SearchCar from '../../components/SearchCar'
import Footer from '../../components/Footer'
import BannerSecond from '../../components/BannerSecond'
import CarList from '../../components/CarList'

const Car = () => {
  return (
    <div>
      <Navbar />
      <BannerSecond />
      <SearchCar />
      <CarList />
      <Footer />
    </div>
  )
}

export default Car
