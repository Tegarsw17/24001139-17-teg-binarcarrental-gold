import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import SearchCar from '../../components/SearchCar'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const navigate = useNavigate()
  const navigateToCarPage = (queries) => {
    navigate('/car', { state: queries })
  }

  return (
    <div>
      <Navbar />
      <Banner isButtonShow={false} />
      <SearchCar onSearch={navigateToCarPage} />
      <Footer />
    </div>
  )
}

export default Search
