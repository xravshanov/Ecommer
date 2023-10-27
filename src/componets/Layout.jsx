import { Outlet } from "react-router-dom"
import Navbar from "./HomePages/Navbar/Navbar"
import Footer from "./HomePages/Footer/Footer"

function Layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout