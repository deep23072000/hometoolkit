import { Link } from "react-router-dom";
import "./Navba.css";
import { useDispatch } from "react-redux";
import { logout } from "../Logintoolkit/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { useState } from "react";

const Navbar = () => {
  const [cartstate,setCartstate] = useState(null)
  const nav = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.auth.items)
  const lout = () => {
    dispatch(logout());
    nav("/");
  };

  const showcart = ()=>{
       setCartstate(<Cart/>)
  }
  return (
    <>
      <div style={{position:"absolute",float:"right"}}>
        {cartstate}
      </div>
      <div id="nav">
        <ul>
          <li>
            <img
              src="https://skins.minimog.co/cdn/shop/files/bike_logo.png?v=1659670130&width=150"
              alt=""
            />
          </li>
        </ul>
        <ul>
          {/* <Link to="/"></Link> */}
          <Link to="/home"> Home </Link>
          <Link to="/shop"> Shop </Link>
          <Link to="/product"> Product </Link>
          <Link to="/home"> Pages </Link>
        </ul>
        <ul>
          <li>log</li>
          <li onClick={showcart}>cart{cart.length}</li>
          <li>
            {" "}
            <button onClick={lout}>logout</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
