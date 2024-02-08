import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";

import { useSelector } from "react-redux";
function App() {
  // let lstate = localStorage.getItem('loginstate');

  const lstate = useSelector((state)=>state.auth.isAuth)
  console.log(lstate)


  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={(lstate)?<Home/>:<Login/>}></Route>
       </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
