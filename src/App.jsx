import { Outlet } from 'react-router-dom'
import './App.css'
import HeroSection from './components/HeroSection'
import Home from './Pages/Home'
import Footer from './components/Footer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import {storeLogin,storeLogout} from './store/authSlice'

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
     const response = fetch("http://localhost:3000/user/getUserDetails",{
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
     })
     .then(async(response)=>{
      const data = await response.json()
      if(response.status == 200){
        console.log(data)
        dispatch(storeLogin(data))
      }
      else{
        dispatch(storeLogout())
      }
     })
  },[dispatch])

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
