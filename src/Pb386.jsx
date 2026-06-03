// Create a React app:
// • Display product quantity
// • Add buttons “Add Item” and “Remove Item”
// • Quantity should never go below 0
// • Use useReducer to manage state

import { useReducer } from "react";

const Pb386 = () => {
    const red = (c,action) => {
        if (action.type=="inc") return c+action.val
        else if (action.type=="dec" && c>0) return c-action.val
        else return 0
    }
    var [c,dis] = useReducer(red,0);
     
    
  return (
    <>
        <h1>Product quantity : {c}</h1>
        <button onClick={()=>{dis({"type":"inc","val":1})}}>Add Item</button>
        <button onClick={()=>{dis({"type":"dec","val":1})}}>Remove Item</button>
    </>
  )
}

export default Pb386