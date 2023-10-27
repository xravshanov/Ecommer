/* eslint-disable react/prop-types */
import Navbar from "./HomePages/Navbar/Navbar"
import Main from "./HomePages/Main/Main"
import Footer from "./HomePages/Footer/Footer"
// import {useGlobalContext} from "../Context";



function Dashboard() {

    // const {user} = useGlobalContext();
  return (
    <div>
        {/* <h2> welcome {user.name} </h2> */}
        <Navbar/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Dashboard;