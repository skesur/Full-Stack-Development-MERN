import { useState, useEffect } from 'react';

const Countde = () => {
    var [count,s] = useState(0);
    var [c1,s1] = useState(0);
    useEffect(()=>alert("count updated"),[c1]);
  return (
    <>
        <h1>{count}</h1>
        <h1>{c1}</h1>
        <button onClick={()=>{if (count<50) {s(count+1)}}}>Inc</button>
        <button onClick={()=>{if (count>10) {s(count-1)}}}>Dec</button>
        <button onClick={()=>{if (c1<50) {s1(c1+1)}}}>Inc</button>
        <button onClick={()=>{if (c1>10) {s1(c1-1)}}}>Dec</button>
    </>
  )
}

export default Countde