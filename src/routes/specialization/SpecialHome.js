import React from 'react'
import { Link } from 'react-router-dom'
import kids from "./pictures/kids.jpg"
import abdomen from "./pictures/abdomen.png"
import heart from "./pictures/heart.jpg"
import heartChildren from "./pictures/heartchildren.png"
import nose from "./pictures/nose.png"
import surgery from "./pictures/surgery.jpg"
import surgeryChildren from "./pictures/surgerychildren.jpg"

function SpecialHome() {
  return (
    <div className='specialHome'>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={kids} alt="kids" />
          </div>
          <Link className='link' to="children">عيادة الأطفال</Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={kids} alt="kids" />
          </div>
          <Link className='link' to="Emergencychildren">عيادة طوارئ الأطفال</Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={abdomen} alt="kids" />
          </div>
          <Link className='link' to="abdomen">عيادة الباطنة</Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={heart} alt="kids" />
          </div>
          <Link className='link' to="heart">عيادة القلب</Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={heartChildren} alt="kids" />
          </div>
          <Link className='link' to="heartchildren">عيادة قلب - أطفال</Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={nose} alt="kids" />
          </div>
          <Link className='link' to="nose">عيادة الأنف والأذن</Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={surgery} alt="kids" />
          </div>
          <Link className='link' to="surgery">عيادة الجراحة العامة</Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={surgeryChildren} alt="kids" />
          </div>
          <Link className='link' to="surgerychildren">عيادة الجراحة - أطفال</Link>
        </div>
      </div>
      <Link to = "surgerywomen">عيادة الجراحة النسائية</Link>
      <Link to = "food">عيادة التغذية العلاجية</Link>
      <Link to = "bones">عيادة العظام</Link>
      <Link to = "chest">عيادة الصدرية</Link>
      <Link to = "teeth">عيادة الأسنان</Link>
      <Link to = "cupping">عيادة الحجامة</Link>
      <Link to = "skin">عيادة الجلدية</Link>
      <Link to = "women">عيادة النسا والتوليد</Link>
      <Link to = "psychology">عيادة النفسية</Link>
      <Link to = "suger">عيادة الغدد الصماء والسكر</Link>
      <Link to = "pathways">عيادة المسالك</Link>
      <Link to = "digestchildren">عيادة الجهاز الهضمى - أطفال</Link>
      <Link to = "brain">عيادة المخ والأعصاب</Link>
      <Link to = "brainchildren">عيادة المخ والأعصاب - أطفال</Link>
      <Link to = "ray">عيادة الأشعة والدوبلر</Link>
      <Link to = "breastfeeding">عيادة الرضاعة</Link>
      <Link to = "tests">تحاليل طبية</Link>
      <Link to = "nursing">خدمات تمريضية</Link>
    </div>
  )
}

export default SpecialHome
