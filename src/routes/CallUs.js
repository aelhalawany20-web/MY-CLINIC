import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from "./CallUs.module.css"


const CallUs = () => {
  return (
    <div className={styles.callUs}>
        <div>
          01500503349 للتواصل عبر الواتساب
          <i class="fa-brands fa-whatsapp"></i>
        </div>
        <div>
          01224274932 - 03/4380633 للحجز عبر الهاتف 
        </div>
    </div>
  )
}

export default CallUs
