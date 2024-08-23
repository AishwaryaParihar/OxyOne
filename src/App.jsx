import './App.css'
import { Outlet } from 'react-router-dom'
import './index.css'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'

function App() {


  return (
    <>
 
 <div className="flex flex-col justify-center items-center bg-secondary">
      <div className="lg:w-6/12 xl:w-[470px] sm:w-8/12 w-full min-h-screen border border-5 shadow-md shadow-zinc-300 relative">
    
        <div className="w-full h-full flex flex-col mt-3">
          {/* {children} */}
          {/* <Outlet/> */}
          <Navbar/>
          <Outlet/>
        </div>
       <Footer/>
      </div>
    </div>
    </>
  )
}

export default App
