import './App.css'
import { Outlet } from 'react-router-dom'
import './index.css'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'

function App() {


  return (
    <>
 
 
          {/* {children} */}
          {/* <Outlet/> */}
          <Navbar/>
          <Outlet/>
     
       <Footer/>
     
    </>
  )
}

export default App
