import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginStatus: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        storeLogin: (state,action)=>{
            state.loginStatus = true,
            state.userData = action.payload
            console.log("storeLogin :", state.userData)
        },
        storeLogout: (state,action)=>{
            state.loginStatus = false,
            state.userData = null
            console.log("storeLogout: logout")
        }
    }

})

export const {storeLogin, storeLogout} = authSlice.actions
export default authSlice.reducer