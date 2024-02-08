import { useDispatch } from "react-redux";
import { login,addtocart } from "./authReducer";
const Login = ()=>{
    const dispatch = useDispatch();
    const dd = ()=>{
        const aa = {
            "name":"deepak"
        }
         dispatch(login())
         dispatch(addtocart(aa))
    }
    
    return(
        <>
            <button onClick={dd}>nnnnnnnnnnnnnnnnnnnnn</button>
        </>
    )
}

export default Login;