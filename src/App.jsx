import { Outlet } from 'react-router-dom'
import './App.css'
import HeroSection from './components/HeroSection'
import Home from './Pages/Home'
import Footer from './components/Footer'

function App() {

  return (
    <>
       <div className="absolute top-0 left-0 z-[-2] w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div>
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
       </div>
    </>
  )
}

export default App
