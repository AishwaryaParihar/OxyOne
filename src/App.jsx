import './App.css'
import { Outlet } from 'react-router-dom'
import './index.css'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import FooterItems from './component/footer/FooterItems'

function App() {


  return (
    <>
 
 
          {/* {children} */}
          {/* <Outlet/> */}
          <Navbar/>
          <Outlet/>
         <FooterItems/>
       <Footer/>
     
    </>
  )
}

export default App
