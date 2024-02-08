import { useDispatch } from "react-redux";
import { logout} from "../../Logintoolkit/authSlice";
import { useNavigate } from "react-router-dom";

const Home = ()=>{
   
   
    const nav = useNavigate();
    const dispatch = useDispatch()
    const lout = ()=>{
        dispatch(logout())
        nav("/")
    }
   
   
    return(
        <>
        
           <button onClick={lout}>logout</button>
          
        </>
    )
}
export default Home