import React from 'react'
import styles from "./index.module.css"
import BackgroundImage from "./background.jpeg"


const Index = () => {
  return (
    <div className={styles.index}>
      <div className={styles.backgroundImg}>
        <img src={BackgroundImage} alt="baackgroundPhoto" />
      </div>
      <div className={styles.head}>
        <h1>صحتكم هي أولويتنا .. وراحتكم هي هدفنا</h1>
        <p>
          في عيادات الحلواني التخصصية نحرص على تقديم رعاية طبية متكاملة من خلال نخبة من الأطباء المتخصصين في مختلف المجالات الطبية، مع الاهتمام بأدق التفاصيل لضمان أفضل مستوى من الرعاية والاهتمام لكل مريض
        </p>
        <p>
          نسعى دائماً إلى توفير بيئة طبية آمنة ومريحة، تجمع بين الخبرة الطبية والاهتمام الإنساني، لنكون دائماً عند حسن ظنكم وثقتكم
        </p>
      </div>
    </div>
  )
}

export default Index


