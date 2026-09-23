import React from 'react'
import { Link } from 'react-router-dom'

function SpecialHome() {
  return (
    <div className='specialHome'>
      <Link to = "children">عيادة الأطفال</Link>
      <Link to = "Emergencychildren">عيادة طوارئ أطفال</Link>
      <Link to = "abdomen">عيادة الباطنة</Link>
      <Link to = "heart">عيادة القلب</Link>
      <Link to = "heartchildren">عيادة قلب - أطفال</Link>
      <Link to = "nose">عيادة الأنف والأذن</Link>
      <Link to = "surgery">عيادة الجراحة</Link>
      <Link to = "surgerychildren">عيادة الجراحة - أطفال</Link>
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
