import React from 'react'
import './style.css'
import { itemList } from '../../utils/dummyData'
import CarCard from '../CarCard'
const CarList = () => {
  return (
    <div className="car-list-wrapper">
      <div className="car-list">
        {itemList.map((item) => (
          <CarCard
            key={item.id}
            id={item.id}
            brand={item.brand}
            price={item.price}
            desc={item.desc}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default CarList
