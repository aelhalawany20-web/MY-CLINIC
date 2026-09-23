import { NavLink } from 'react-router-dom';
import "./header.css"
import logo from "./emadClinic.jpg"

const Header = () => {
  return (
    <div className="header">
        <div className="logoPhoto">
            <img src={logo} alt="Elhalawany Clinic"></img>    
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to= "/">الرئيسية</NavLink>
                </li>
                <li>
                    <NavLink to= "specialties">التخصصات</NavLink>
                </li>
                <li>
                    <NavLink to= "social">السوشيال</NavLink>
                </li>
                <li>
                    <NavLink to= "callUs">اتصل بنا</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header;