import React from 'react'
import { formatRupiah } from '../../utils/formatUtil'
import { Link, useNavigate } from 'react-router-dom'

const CarCard = ({ id, brand, price, desc, image }) => {
  const navigate = useNavigate()
  const handleButtonCar = () => {
    navigate(`/car/${id}`)
  }
  return (
    <div className="card-car">
      <div className="card-content">
        <div className="card-car-image">
          <img src={image}></img>
        </div>
        <div className="card-car-text">
          <p>{brand}</p>
          <p>{formatRupiah(price)} / hari</p>
          <p>{desc}</p>
        </div>
      </div>
      <button onClick={handleButtonCar}>Pilih Mobil</button>
    </div>
  )
}

export default CarCard
