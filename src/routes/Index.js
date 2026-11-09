import React from 'react'
import styles from "./index.module.css"
import BackgroundImage from "./background.jpeg"


const Index = () => {
  return (
    <div className={styles.index}>
      <img src={BackgroundImage} alt="baackgroundPhoto" />
    </div>
  )
}

export default Index


