import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import ProductDetails from './ProductDetails'

let fid = createContext();

const Catalog = () => {
    var [im,setIm] = useState([])
    useEffect(()=>{axios.get('https://fakestoreapi.com/products')
      .then ((r)=>setIm(r.data))
      .catch((e)=>console.log(e));
    },[])
    var [pd,setPd] = useState(false)
  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>
        {im.map((e)=><>
        <div style={{margin:20,width:350,height:250,backgroundColor:'plum',borderRadius:40,padding:20,display:'flex'
            ,alignItems:'center',justifyContent:'center',flexDirection:'column'
        }}>
            <b>Name : {e.title}</b><br/><br/>
            <img src={e.image} alt="" srcset="" style={{height:100,borderRadius:40}}/><br/><br/>
            <button onClick={()=>{setPd(true)}}>Show Product Details</button>
            <fid.Provider value={e}>
                {pd==true && <ProductDetails/>}
            </fid.Provider>
        </div>
        </>)}
    </div>
  )
}

export default Catalog
export { fid }