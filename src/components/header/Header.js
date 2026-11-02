import { NavLink } from 'react-router-dom';
import "./header.css"
import logo from "./emadClinic1.png"

const Header = () => {
  return (
    <div className="header">
        <div className="logoPhoto">
            <img src={logo} alt="Elhalawany Clinic"></img>    
        </div>
        <nav className='navLap'>
            <ul>
                <li>
                    <NavLink to= "/">الرئيسية</NavLink>
                </li>
                <li>
                    <NavLink to= "specialties">التخصصات</NavLink>
                </li>
                <li>
                    <NavLink to= "doctors">أطباؤنا</NavLink>
                </li>
                <li>
                    <NavLink to= "social">السوشيال</NavLink>
                </li>
                <li>
                    <NavLink to= "callUs">اتصل بنا</NavLink>
                </li>
            </ul>
        </nav>
        <div className='list'>
            <i class="fa-solid fa-list"></i>
            <nav className='navMob'>
                <div>
                    <div>
                        <NavLink to= "/">الرئيسية</NavLink>
                    </div>
                    <div>
                        <NavLink to= "specialties">التخصصات</NavLink>
                    </div>
                    <div>
                        <NavLink to= "doctors">أطباؤنا</NavLink>
                    </div>
                    <div>
                        <NavLink to= "social">السوشيال</NavLink>
                    </div>
                    <div>
                        <NavLink to= "callUs">اتصل بنا</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header;