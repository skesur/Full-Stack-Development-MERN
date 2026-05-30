import { useState } from "react"

const Imgshow = () => {
    const image = ["p1.jfif", "p2.webp", "p3.webp", "p4.jfif"]
    const [i1,setI1] = useState(image[0])
    const [i,setI2] = useState(image[0])
    let k = 0;
  return (
    <>
        <img src={i1} alt="" style={{width:100,marginRight:20,marginBottom:20}}/>
        <img src={i} alt="" style={{width:100,margin:20}}/><br/><br/>
        <button onClick={()=>{if(k==0){setI1(image[k++])}else{setI1(image[k--])}}}>Chnage image</button><br/><br/>
        <button onClick={()=>{setI2(image[Math.floor(Math.random()*4)])}}>Show random image</button>
    </>
  )
}

export default Imgshow