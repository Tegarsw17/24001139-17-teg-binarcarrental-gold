import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import SearchCar from '../../components/SearchCar'

const Search = () => {
  return (
    <div>
      <Navbar />
      <Banner isButtonShow={false} />
      <SearchCar />
      <Footer />
    </div>
  )
}

export default Search
