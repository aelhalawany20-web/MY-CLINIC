import React,{ Fragment } from 'react'
import {doctors} from "./specialization/Department"

const Doctors = () => {
    const ourDoctors = Object.entries(doctors).map(([key, value]) => (
        Object.values(value).map(el => (
            <div>     
                <div className='doctorPhoto'>
                    <img src={el.image} alt=" صورة الدكتور"></img>
                </div>
                <div className='details'>
                    <div className='name'>
                        {el.doctor}
                    </div>
                    <div className='specialty'>
                        {el.degree}
                    </div>
                </div>
            </div>
        ))
    ))

  return (
    <div className='ourDoctors'>
      {ourDoctors}
    </div>
  )
}

export default Doctors;