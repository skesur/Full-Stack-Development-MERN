import { useState } from "react";

const Countd = () => {
    var [count,s] = useState(0);
  return (
    <>
        <h1>{count}</h1>
        <button onClick={()=>{if (count<50) {s(count+1)}}}>Inc</button>
        <button onClick={()=>{if (count>10) {s(count-1)}}}>Dec</button>
    </>
  )
}

export default Countd