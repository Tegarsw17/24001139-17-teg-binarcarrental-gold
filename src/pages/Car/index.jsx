import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import SearchCar from '../../components/SearchCar'
import Footer from '../../components/Footer'
import BannerSecond from '../../components/BannerSecond'
import CarList from '../../components/CarList'
import PaginationNumber from '../../components/Pagination'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { minMaxPriceValue } from '../../utils/formatUtil'

const Car = () => {
  const location = useLocation()
  const [data, setData] = useState([])
  const [curentPage, setCurentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [queryApi, setQueryApi] = useState({})

  const handleSearch = async (queries, page = 1) => {
    try {
      const { nameCar, capacityCar, priceCar, statusCar } = queries
      const [minPrice, maxprice] = minMaxPriceValue(priceCar)
      const response = await axios.get(
        'https://api-car-rental.binaracademy.org/customer/v2/car',
        {
          params: {
            name: nameCar,
            category: capacityCar,
            isRented: statusCar,
            minPrice: minPrice,
            maxPrice: maxprice,
            page,
            pageSize: 10,
          },
          timeout: 10000,
        }
      )
      setData(response.data.cars)
      setCurentPage(response.data.page)
      setTotalPages(response.data.pageCount)
    } catch (error) {
      console.error(
        'Error fetching data',
        error.response ? error.response.data : error.message
      )
    }
  }

  useEffect(() => {
    if (location.state) {
      setQueryApi(location.state)
      handleSearch(location.state, 1)
    }
  }, [location.state])

  const handlePageChange = (page) => {
    handleSearch(queryApi, page)
    setCurentPage(page)
  }

  const searchCar = (q) => {
    setQueryApi(q)
    handleSearch(q, 1)
  }

  return (
    <div>
      <Navbar />
      <BannerSecond />
      <SearchCar onSearch={searchCar} />
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
