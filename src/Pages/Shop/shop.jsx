import axios from "axios";
import { useEffect, useState } from "react";

const Shop = ()=>{
    const [store,setStore] = useState([])
    useEffect(()=>{
       const fetchdata = async()=>{
             const data = await axios.get('https://jsonplaceholder.typicode.com/photos');
             const response = await data.data;
             setStore(response)
       }
       fetchdata()
    },[])
    return(
        <>
            {
                store.map((e)=>{
                    return <div key={e.id}>
                       <div>{e.title}</div>
                </div>
})
            }
        </>
    )
}

export default Shop;