import React from 'react'
import styles from "./footer.module.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import ElhalawanyClinic from "../header/emadClinic1.png"
import { NavLink } from 'react-router-dom';

 const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.col1}>
        <div className={styles.logoPhoto}>
          <img src={ElhalawanyClinic} alt="logo" />
        </div>
      </div>
      <div className={styles.col2}>
        <div className={styles.times}>
          <div>
            <i class="fa-solid fa-calendar-days"></i>
            من السبت إلى الخميس
          </div>
          <div>من الساعة 10 صباحا حتى 10 مساءا</div>
        </div>
        <div className={styles.address}>
          <i class="fa-solid fa-location-dot"></i>
          العجمى - أبو يوسف - بجوار مدرسة الأورمان
        </div>
      </div>
      <div className={styles.col3}>
        خدماتنا
        <div className={styles.clinics}>
          <NavLink to= "specialties">التخصصات</NavLink>
        </div>
        <div className={styles.doctors}>
          <NavLink to= "doctors">أطباؤنا</NavLink>
        </div>
      </div>
      <div className={styles.col4}>
        تعرف علينا أكثر
        <div className={styles.social}>
          <NavLink to= "social">السوشيال</NavLink>
        </div>
        <div className={styles.callUs}>
          <NavLink to= "callUs">اتصل بنا</NavLink>
        </div>
      </div>
      <div className={styles.col5}>
          <a href="https://www.facebook.com/profile.php?id=61565606768972" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <i class="fa-brands fa-whatsapp"></i>
        </div>
    </div>
  )
}

export default Footer;