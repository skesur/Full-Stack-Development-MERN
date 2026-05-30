import { useState, useEffect } from 'react';
const Theme = () => {
    var [c,s] = useState(0);
    useEffect(()=>{document.body.style.backgroundColor=`${c}`});
    var [t,sT] = useState("");
    useEffect(()=>{setInterval(()=>{sT(new Date().toLocaleTimeString())},1000)})
  return (
    <>
        Select theme : <input type="color" name="c" id="" onChange={(e)=>s(e.target.value)}/>
        <h1 id="h">Clock : {t}</h1>
    </>
  )
}

export default Theme