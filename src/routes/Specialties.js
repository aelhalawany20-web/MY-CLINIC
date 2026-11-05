import { Outlet } from 'react-router-dom';
import styles from "./Specialties.module.css"


const Specialties = () => {
  return (
    <div className={styles.specialties}>
        <Outlet />
    </div>
  )
}

export default Specialties
