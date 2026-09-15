import React from 'react'
import { Link } from 'react-router-dom'

function SpecialHome() {
  return (
    <div className='specialHome'>
      <div>
        <Link to = "children">عيادة الأطفال</Link>
      </div>
      <div>
        <Link to = "Emergencychildren">عيادة طوارئ أطفال</Link>
      </div>
      <div>
        <Link to = "abdomen">عيادة الباطنة</Link>
      </div>
      <div>
        <Link to = "heart">عيادة القلب</Link>
      </div>
      <div>
        <Link to = "heartchildren">عيادة قلب - أطفال</Link>
      </div>
      <div>
        <Link to = "nose">عيادة الأنف والأذن</Link>
      </div>
      <div>
        <Link to = "surgery">عيادة الجراحة</Link>
      </div>
      <div>
        <Link to = "surgerychildren">عيادة الجراحة - أطفال</Link>
      </div>
      <div>
        <Link to = "surgerywomen">عيادة الجراحة النسائية</Link>
      </div>
      <div>
        <Link to = "food">عيادة التغذية العلاجية</Link>
      </div>
      <div>
        <Link to = "bones">عيادة العظام</Link>
      </div>
      <div>
        <Link to = "chest">عيادة الصدرية</Link>
      </div>
      <div>
        <Link to = "teeth">عيادة الأسنان</Link>
      </div>
      <div>
        <Link to = "cupping">عيادة الحجامة</Link>
      </div>
      <div>
        <Link to = "skin">عيادة الجلدية</Link>
      </div>
      <div>
        <Link to = "women">عيادة النسا والتوليد</Link>
      </div>
      <div>
        <Link to = "psychology">عيادة النفسية</Link>
      </div>
      <div>
        <Link to = "suger">عيادة الغدد الصماء والسكر</Link>
      </div>
      <div>
        <Link to = "pathways">عيادة المسالك</Link>
      </div>
      <div>
        <Link to = "digestchildren">عيادة الجهاز الهضمى - أطفال</Link>
      </div>
      <div>
        <Link to = "brain">عيادة المخ والأعصاب</Link>
      </div>
      <div>
        <Link to = "brainchildren">عيادة المخ والأعصاب - أطفال</Link>
      </div>
      <div>
        <Link to = "ray">عيادة الأشعة والدوبلر</Link>
      </div>
      <div>
        <Link to = "breastfeeding">عيادة الرضاعة</Link>
      </div> 
      <div>
        <Link to = "tests">تحاليل طبية</Link>
      </div>
      <div>
        <Link to = "nursing">خدمات تمريضية</Link>
      </div> 
    </div>
  )
}

export default SpecialHome
