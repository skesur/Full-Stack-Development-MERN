// Create a React app:
// • Add Start and Stop buttons
// • When Start is clicked, counter increments every second
// • When Stop is clicked, counter stops
// • Use useEffect with cleanup

import { useState, useEffect } from 'react';

const Pb385 = () => {
    var [num,setNum] = useState(0);
    var [start,setStart] = useState(0);
    useEffect(
        ()=>{
            var interval;
            if (num==1){
                interval=setInterval(()=>{setStart(start+1)},1000);
            }
            return ()=>{clearInterval(interval)};
        }
    )
  return (
    <>
        <input type="button" value="Start" onClick={()=>{setNum(1)}}/><br/><br/>
        <input type="button" value="Stop" onClick={()=>{setNum(0)}}/><br/><br/>
        <h1>Timer : {start}</h1>
    </>
  )
}

export default Pb385