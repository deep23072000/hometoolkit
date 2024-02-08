import { useDispatch } from "react-redux";
import { login,logout } from "./authSlice";
const Login = ()=>{
     const dispatch = useDispatch()
    const sub = ()=>{
           dispatch(login())
    }

    const logout1 = ()=>{
        dispatch(logout())
    }
    return(
        <>
          <button onClick={sub}>click</button>
          <button onClick={logout1}>logout</button>
        </>
    )
}

export default Login