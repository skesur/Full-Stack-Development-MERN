// Create a ReactJS program using function component having two input 
// fields for num1 and num2 and two buttons for addition and subtraction of 
// the two numbers. Display the respective outputs on same page using 
// useState hook. Also display alert box as an effect on every time the addition 
// button is clicked using useEffect hook

import { useState, useEffect } from 'react';

const Pb380 = () => {
    var [n1,s1] = useState(0);
    var [n2,s2] = useState(0);
    var [add,sA] = useState(0);
    useEffect(()=>{alert("Addition is done!")},[add]);
    var [sub,sS] = useState(0);
  return (
    <>
        <input type="number" name="n1" id="" onChange={(e)=>{s1(parseInt(e.target.value))}}/><br/><br/>
        <input type="number" name="n2" id="" onChange={(e)=>{s2(parseInt(e.target.value))}}/><br/><br/>
        <input type="button" value="Add" onClick={()=>{sA(n1+n2)}}/><br/><br/>
        <input type="button" value="Sub" onClick={()=>{sS(n1-n2)}}/><br/><br/>
        <h1>Add : {add}</h1>
        <h1>Sub : {sub}</h1>
    </>
  )
}

export default Pb380