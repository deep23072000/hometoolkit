import { useDispatch } from "react-redux";
import { login } from "../../Logintoolkit/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = ()=> {
 
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
    const dispatch = useDispatch();
    const nav = useNavigate()

    const handlelogin = async()=>{
           let data = await axios.get('http://localhost:4000/reg');
           let response = await data.data;
           let dd = response.find(e=>e.username === email && e.password === password);
           if(dd){
              dispatch(login());
              nav("/home")
           }
           else{
            alert("please register first")
           }

    }
    return (
      <>
         <center>
          <div><input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"></input>  </div>   
          <div><input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter passowrd"></input> </div>  
          {/* <div><button onClick={()=>{dispatch(login())}}>Login</button></div>    */}
          <div><button onClick={handlelogin}>Login</button></div>
          </center>
       
      </>
     
    );
  }
  
  export default Login;
  