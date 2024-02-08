import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth:false,
}

console.log(initialState.isAuth)

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state)=>{
            state.isAuth = true;
            console.log(state.isAuth)
            localStorage.setItem('authstate',state.isAuth)
        },
        logout:(state)=>{
            state.isAuth = false;
            localStorage.setItem('authstate',state.isAuth)
        }
    }
});

export const {login,logout} = authSlice.actions;

export default authSlice.reducer;