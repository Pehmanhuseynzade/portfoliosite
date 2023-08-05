import Footer from '../../components/user/Footer'
import Navbar from '../../components/user/Navbar'
import {Outlet} from "react-router-dom"
function Mainroot() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Mainroot