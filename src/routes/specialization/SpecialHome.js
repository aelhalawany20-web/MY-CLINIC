import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Specialties.module.css"



function SpecialHome({details = []}) {
  const specialization = details.map(el => (
    <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.image}>
            <img src={el.photo} alt="photos" />
          </div>
          <Link className={styles.link} to={el.link}>{el.name}</Link>
        </div>
      </div>
  ))
  return (
    <div className={styles.specialHome}>
      {specialization}
    </div>
  )
}

export default SpecialHome
