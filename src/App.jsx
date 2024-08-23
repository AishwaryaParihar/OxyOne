import './App.css'
import { Outlet } from 'react-router-dom'
import './index.css'
<<<<<<< HEAD
import Navbar from './component/navbar/Navbar'
=======
import Footer from './component/footer/Footer'
>>>>>>> 4f08d53a2cefda07f617e8e86a5b349068640bf9

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
