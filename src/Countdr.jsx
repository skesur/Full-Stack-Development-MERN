import { useReducer } from "react";

const Countdr = () => {
    const red = (c,action) => {
        if (action.type=="inc") return c+action.val
        else if (action.type=="reset") return 0;
        else return c-action.val
    }
    var [c,dis] = useReducer(red,0);
     
    
  return (
    <>
        <h1>{c}</h1>
        <button onClick={()=>{dis({"type":"inc","val":1})}}>Inc</button>
        <button onClick={()=>{dis({"type":"dec","val":1})}}>Dec</button>
        <button onClick={()=>{dis({"type":"reset"})}}>Reset</button>
    </>
  )
}

export default Countdr