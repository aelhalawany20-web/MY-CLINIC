import React, {Fragment} from 'react'
import {doctors} from "./specialization/Department"
import styles from "./OurDoctors.module.css"

const Doctors = () => {
    const ourDoctors = Object.entries(doctors).map(([key, value]) => (
        Object.values(value).map(el => (
            <div className={styles.card}>
                <div className={styles.doctorPhoto}>
                    <img src={el.image} alt=" صورة الدكتور"></img>
                </div>
                <div className={styles.details}>
                    <div className={styles.doctor}>
                        <div className={styles.name}>
                            {el.doctor}
                        </div>
                        <div className={styles.speciality}>
                            {el.degree}
                        </div>
                    </div>
                    <div className={styles.workingTime}>
                        <div className={styles.time}>
                            <i class="fa-solid fa-calendar-days"></i>
                            {
                                Object.entries(el).map(([key,value]) => (
                                    key === "working Time" && (
                                        Object.values(value).map((ele, index) => (
                                            <Fragment key={index}>
                                                {index > 0 && " || "}
                                                {ele.day} ({ele.time})
                                                
                                            </Fragment>
                                        ))
                                    )
                                ))
                            }
                        </div>
                        <a className={styles.booking} href="https://wa.me/201500503349/" target="_blank" rel="noreferrer">
                            احجز الآن
                        </a>
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
