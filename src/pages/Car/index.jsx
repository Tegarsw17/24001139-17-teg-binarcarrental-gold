import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import SearchCar from '../../components/SearchCar'
import Footer from '../../components/Footer'
import BannerSecond from '../../components/BannerSecond'
import CarList from '../../components/CarList'
import PaginationNumber from '../../components/Pagination'
import axios from 'axios'

const Car = () => {
  const [data, setData] = useState([])
  const [curentPage, setCurentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const fetchData = async (page) => {
    console.log('Halaman Sekarang: ', page)
    try {
      const apiURL = `https://api-car-rental.binaracademy.org/customer/v2/car?page=${curentPage}`
      const response = await axios.get(apiURL)
      console.log(response.data)
      setData(response.data.cars)
      setCurentPage(response.data.page)
      setTotalPages(response.data.pageCount)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData(curentPage)
  }, [curentPage])

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurentPage(page)
    }
  }

  return (
    <div>
      <Navbar />
      <BannerSecond />
      <SearchCar />
      <CarList data={data} />
      <PaginationNumber
        total={totalPages}
        active={curentPage}
        onPageChange={handlePageChange}
      />
      <Footer />
    </div>
  )
}

export default Car
