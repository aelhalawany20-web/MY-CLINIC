import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import "./routes.css"

const Main = () => {
  return (
    <div className="main">
        <Header />
        <div className="between">
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Main
