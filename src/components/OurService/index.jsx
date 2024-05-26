import React from 'react'
import './style.css'
import GirlImage from '../../assets/girl_ourservice.png'
import { ourServiceData } from '../../utils/dummyData'
const OurService = ({ id }) => {
  return (
    <div id={id} className="our-service-wrapper">
      <div className="our-service">
        <div className="our-service-image">
          <div className="our-service-bacground-circle"></div>
          <img src={GirlImage}></img>
          <div className="our-service-circle green"></div>
          <div className="our-service-circle yellow"></div>
          <div className="our-service-circle red"></div>
        </div>
        <div className="our-service-text">
          <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
          <p>
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <ul className="our-service-list">
            {ourServiceData.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OurService
