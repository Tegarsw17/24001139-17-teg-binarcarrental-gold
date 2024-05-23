import React from 'react'
import './style.css'
import CarImage from '../../assets/mobil_banner.png'
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text">
        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
        <p>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </p>
        <button>Mulai Sewa Mobil</button>
      </div>
      <div className="banner-image">
        <div className="banner-image-background"></div>
        <img src={CarImage}></img>
      </div>
    </div>
  )
}

export default Banner
