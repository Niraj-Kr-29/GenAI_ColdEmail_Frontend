import { Outlet } from 'react-router-dom'
import './App.css'
import HeroSection from './components/HeroSection'
import Home from './Pages/Home'
import Footer from './components/Footer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import {storeLogin,storeLogout} from './store/authSlice'
import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'


function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    const fetchUser = async() =>{
      const response = await fetch("https://genai-coldemail.onrender.com/user/getUserDetails",{
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
     .catch((error)=>{
      console.error(error)
     })
    }

    fetchUser()
  },[dispatch])

  return (
    <>
      <div className="fixed inset-0 -z-10 w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <div className="relative z-50 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow w-full">
          <Outlet />
        </main>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
        />
      </div>
    </>
  );
}

export default App
