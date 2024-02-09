import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth:false,
    items:[],
}
console.log(initialState.isAuth)
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state)=>{
            state.isAuth = true;
            // localStorage.setItem('loginstate',state.isAuth)
            // console.log(state.isAuth)
        },
        logout:(state)=>{
            state.isAuth= false;
            // localStorage.setItem('loginstate',state.isAuth)
            // console.log(state.isAuth)
        },
        addtocart:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
          const idToRemove = action.payload;
          state.items = state.items.filter(item => item.id !== idToRemove);
        },
        

    }
});

export const {login,logout,addtocart,removeItem,closeCart} = authSlice.actions;
export default authSlice.reducer;



