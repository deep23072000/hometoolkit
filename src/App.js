import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar";
import Product from "./Pages/Product/Product";
import Shop from "./Pages/Shop/shop";

import { useSelector } from "react-redux";
function App() {
  // let lstate = localStorage.getItem('loginstate');

  const lstate = useSelector((state)=>state.auth.isAuth)
  console.log(lstate)


  return (
    <>
    <BrowserRouter>
    {(lstate)?<Navbar/>:null}
       <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={(lstate)?<Home/>:<Login/>}></Route>
        <Route path="/shop" element={(lstate)?<Shop/>:<Login/>}></Route>
        <Route path="/product" element={(lstate)?<Product/>:<Login/>}></Route>
       </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
