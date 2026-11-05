import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import styles from "./DoctorCard.module.css"



const DoctorCard = ({details, departmentNmae}) => {
    const location = useLocation().pathname
    const specialistName = location.split("/",3)[2]

    const departNmae = Object.entries(departmentNmae).map(([key, value]) => (
        specialistName === key && (
            <div className={styles.specialistName}>{value}</div>   
        )
    ))
   
    const doctor = Object.entries(details).map(([key, value]) => (
        location === /specialties/+key && (
            Object.values(value).map(el => (
                <div>     
                    <div className={styles.doctorPhoto}>
                        <img src={el.image} alt=" صورة الدكتور"></img>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.doctorInfo}>
                            <div className={styles.name}>
                                {el.doctor}
                            </div>
                            <div className={styles.specialty}>
                                {el.degree}
                            </div>
                        </div>
                        <div className={styles.workingTime}>
                            {
                                Object.entries(el).map(([key,value]) => (
                                    key === "working Time" && (
                                        Object.values(value).map(ele => (
                                            <Fragment>
                                                <div>{ele.day}</div>
                                                <div>{ele.time}</div>
                                            </Fragment>
                                        ))
                                    )
                                ))
                            }
                        </div>
                    </div>
                    
                </div>
            ))
        )
    ))
    return (
        <Fragment>
            <Fragment>{departNmae}</Fragment>
            <div className={styles.doctors}>
                {doctor}
            </div>
        </Fragment>
  )
}

export default DoctorCard