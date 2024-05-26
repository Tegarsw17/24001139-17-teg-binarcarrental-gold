import React from 'react'
import './style.css'
const PromoBanner = () => {
  return (
    <div className="promo-banner-wrapper">
      <div className="promo-banner">
        <h1 className="promo-banner-title">
          Sewa Mobil di (Lokasimu) Sekarang
        </h1>
        <p className="promo-banner-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </p>
        <button className="promo-banner-button">Mulai Sewa Mobil</button>
      </div>
    </div>
  )
}

export default PromoBanner
