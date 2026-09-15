import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom'


const DoctorCard = ({details}) => {
    const location = useLocation().pathname
    const specialistName = location.split("/",3)[2]
   
    const doctor = Object.entries(details).map(([key, value]) => (
        location === /specialties/+key && (
            Object.values(value).map(el => (
                <div>     
                    <div className='doctorPhoto'>
                        <img src={el.image} alt=" صورة الدكتور"></img>
                    </div>
                    <div className='wrokingTime'>
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
                    <div className='doctorInfo'>
                        <div className='name'>
                        {el.doctor}
                    </div>
                    <div className='specialty'>
                        {el.degree}
                    </div>
                    </div>
                </div>
            ))
        )
    ))
    return (
        <Fragment>
            <div>{specialistName}</div>
            <div className='doctors'>
                {doctor}
            </div>
        </Fragment>
  )
}

export default DoctorCard