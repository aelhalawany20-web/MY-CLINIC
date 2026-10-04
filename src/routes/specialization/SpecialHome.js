import React from 'react'
import { Link } from 'react-router-dom'


function SpecialHome({details = []}) {
  const specialization = details.map(el => (
    <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={el.photo} alt="photos" />
          </div>
          <Link className='link' to={el.link}>{el.name}</Link>
        </div>
      </div>
  ))
  return (
    <div className='specialHome'>
      {specialization}
    </div>
  )
}

export default SpecialHome
