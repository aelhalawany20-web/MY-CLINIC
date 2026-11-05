import React from 'react'
import {doctors} from "./specialization/Department"
import styles from "./OurDoctors.module.css"

const Doctors = () => {
    const ourDoctors = Object.entries(doctors).map(([key, value]) => (
        Object.values(value).map(el => (
            <div>     
                <div className={styles.doctorPhoto}>
                    <img src={el.image} alt=" صورة الدكتور"></img>
                </div>
                <div className={styles.details}>
                    <div className={styles.name}>
                        {el.doctor}
                    </div>
                    <div className={styles.specialty}>
                        {el.degree}
                    </div>
                </div>
            </div>
        ))
    ))

  return (
    <div className={styles.ourDoctors}>
      {ourDoctors}
    </div>
  )
}

export default Doctors;
