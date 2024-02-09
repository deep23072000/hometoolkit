import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem} from "../Logintoolkit/authSlice";
const Cart = ()=>{
    const cartdata = useSelector((st)=>st.auth.items);
    const dispatch = useDispatch()
    const remo = (arg)=>{
        dispatch(removeItem(arg))
    }

    const clo = ()=>{
        // dispatch(closeCart())
    }
    return(
        <>
        ()

<section style={{height:"100vh",overflowY:"scroll",backgroundColor:"black",position:"absolute",left:"1100px",top:"50px"}} >
    <button onClick={clo}>X</button>
          {cartdata.map(e=>{
            return <div key={e.id}>
                 <div class="product-card">
          <div class="product-image">
              <img src={e.image} alt="Product Image"/>
          </div>
          <div class="product-details">
              <div class="product-name">{e.name}</div>
              <div class="product-price">{e.price}</div>
              <button onClick={()=>{remo(e.id)}}>remove</button>
              
          </div>
         
      </div> 
            </div>
          })}
          </section>
            
        </>
    )
}
export default Cart;