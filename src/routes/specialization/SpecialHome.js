import React from 'react'
import { Link } from 'react-router-dom'
import kids from "./pictures/kids.jpg"
import abdomen from "./pictures/abdomen.png"
import heart from "./pictures/heart.jpg"
import heartChildren from "./pictures/heartchildren.png"
import nose from "./pictures/nose.png"
import surgery from "./pictures/surgery.jpg"
import surgeryChildren from "./pictures/surgerychildren.jpg"
import surgeryWomen from "./pictures/surgery.jpg"
import food from "./pictures/food.png"
import bones from "./pictures/bones.png"
import chest from "./pictures/chest.jpg"
import teeth from "./pictures/teeth.jpg"
import cupping from "./pictures/cupping.png"
import skin from "./pictures/skin.jpg"
import women from "./pictures/women.jpg"
import psychology from "./pictures/psychology.jpg"
import suger from "./pictures/suger.jpg"
import pathways from "./pictures/pathways.jpg"
import digestchildren from "./pictures/digestchildren.png"
import brain from "./pictures/brain.jpg"
import ray from "./pictures/ray.jpg"
import breastfeeding from "./pictures/breastfeeding.jpg"
import tests from "./pictures/tests.jpg"
import nursing from "./pictures/nursing.jpg"

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
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={surgeryWomen} alt="kids" />
          </div>
          <Link className='link' to="surgerywomen">عيادة الجراحة النسائية</Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={food} alt="kids" />
          </div>
          <Link className='link' to="food">عيادة التغذية العلاجية </Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={bones} alt="kids" />
          </div>
          <Link className='link' to="bones">عيادة العظام </Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={chest} alt="kids" />
          </div>
          <Link className='link' to="chest">عيادة الصدرية </Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={teeth} alt="kids" />
          </div>
          <Link className='link' to="teeth">عيادة الأسنان </Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={cupping} alt="kids" />
          </div>
          <Link className='link' to="cupping">عيادة الحجامة </Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={skin} alt="kids" />
          </div>
          <Link className='link' to="skin">عيادة الجلدية </Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={women} alt="kids" />
          </div>
          <Link className='link' to="women">عيادة النسا والتوليد </Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={psychology} alt="kids" />
          </div>
          <Link className='link' to="psychology">عيادة النفسية  </Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={suger} alt="kids" />
          </div>
          <Link className='link' to="suger">عيادة الغدد الصماء والسكر  </Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={pathways} alt="kids" />
          </div>
          <Link className='link' to="pathways">عيادة المسالك  </Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={digestchildren} alt="kids" />
          </div>
          <Link className='link' to="digestchildren">عيادة الجهاز الهضمى - أطفال  </Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={brain} alt="kids" />
          </div>
          <Link className='link' to="brain">عيادة المخ والأعصاب  </Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={ray} alt="kids" />
          </div>
          <Link className='link' to="ray">عيادة الأشعة والدوبلر  </Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={breastfeeding} alt="kids" />
          </div>
          <Link className='link' to="breastfeeding">عيادة الرضاعة  </Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={tests} alt="kids" />
          </div>
          <Link className='link' to="tests">تحاليل طبية  </Link>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='image'>
            <img src={nursing} alt="kids" />
          </div>
          <Link className='link' to="nursing">خدمات تمريضية  </Link>
        </div>
      </div>
    </div>
  )
}

export default SpecialHome
