import React from 'react'
import ThumbIcon from '../../assets/thumbs-up.png'
import ClockIcon from '../../assets/clock.png'
import TagIcon from '../../assets/tag.png'
import AwardIcon from '../../assets/award.png'
import './style.css'
const WhyUsCard = ({ icon, title, desc, color }) => {
  return (
    <div className="whyus-list-item">
      <img src={icon} style={{ backgroundColor: color }}></img>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}

export default WhyUsCard
