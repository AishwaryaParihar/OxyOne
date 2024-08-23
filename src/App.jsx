import './App.css'
import { Outlet } from 'react-router-dom'
import './index.css'
import Footer from './component/footer/Footer'

function App() {


  return (
    <>
 
 <div className="flex flex-col justify-center items-center bg-secondary">
      <div className="lg:w-6/12 xl:w-[470px] sm:w-8/12 w-full min-h-screen border border-5 shadow-md shadow-zinc-300 relative">
        {/* <Header /> */}
        <div className="w-full h-full flex flex-col mt-3">
          {/* {children} */}
          {/* <Outlet/> */}
        <h1  className='text-red-300'>aaaaaaaaaaaa</h1>
          <Outlet/>
        </div>
       <Footer/>
      </div>
    </div>
    </>
  )
}

export default App
