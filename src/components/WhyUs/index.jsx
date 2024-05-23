import React from 'react'
import './style.css'
import { whyUsData } from '../../utils/dummyData'
import WhyUsCard from '../WhyUsCard'

const WhyUs = () => {
  return (
    <div className="whyus-wrapper">
      <div className="whyus">
        <h2 className="whyus-title">Why Us ?</h2>
        <p className="whyus-desc">Mengapa harus pilih Binar Car Rental?</p>
        <div className="whyus-list">
          {whyUsData.map((item) => (
            <WhyUsCard
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyUs
