import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isAuth:false,
    user:[]
}
console.log(initialState.isAuth)

const authslice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state)=>{
            state.isAuth = true;
            console.log(state.isAuth)
        },
        addtocart:(state,action)=>{
            state.user = [action.payload];
            console.log(state.user)
        }
    }
});

export const {login,addtocart} = authslice.actions;

export default authslice.reducer; 