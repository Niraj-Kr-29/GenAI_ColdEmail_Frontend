import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AuthLayout = ({children, requiredAuthentication})=>{
   const [loader, setLoader] = useState(true);
   const navigate = useNavigate()
   
   const authStatus = useSelector((state)=>state.auth.loginStatus)
   
   useEffect(()=>{
    if(authStatus === null) return;
     if(authStatus == false && requiredAuthentication == true){
        window.location.href = 'https://genai-coldemail.onrender.com/auth/google'
        return
     }
     setLoader(false)
   },[authStatus,requiredAuthentication])

   return loader? <h1>Loading...</h1> : <>{children}</>

}