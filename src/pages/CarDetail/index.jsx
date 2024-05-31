import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import SearchCar from '../../components/SearchCar'
import Footer from '../../components/Footer'
import BannerSecond from '../../components/BannerSecond'
import CarDetailCard from '../../components/CarDetailCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const CarDetail = () => {
  let { id } = useParams()
  const [detailCarData, setDetailCarData] = useState({})

  const fetchDetailCar = async (idCar) => {
    try {
      const apiURL = `https://api-car-rental.binaracademy.org/customer/car/${idCar}`
      const response = await axios.get(apiURL)
      setDetailCarData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchDetailCar(id)
  }, [])

  return (
    <div>
      <Navbar />
      <BannerSecond />
      <SearchCar isDisabled={true} />
      <CarDetailCard data={detailCarData} />
      <Footer />
    </div>
  )
}

export default CarDetail
