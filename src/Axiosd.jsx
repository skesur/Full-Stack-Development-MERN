import axios from 'axios'
import { useEffect, useState } from 'react'

const Axiosd = () => {
    var [im,setIm] = useState(null)
    useEffect(()=>{axios.get('https://dog.ceo/api/breeds/image/random')
      .then ((r)=>setIm(r.data.message))
      .catch((e)=>console.log(e));
    },[])

    var [im1,setIm1] = useState(null)
    useEffect(()=>{axios.get('https://api.thecatapi.com/v1/images/search')
      .then ((r)=>setIm1(r.data[0].url))
      .catch((e)=>console.log(e));
    },[])

    var [im2,setIm2] = useState("")
    var [im3,setIm3] = useState("")
    useEffect(()=>{axios.get('https://official-joke-api.appspot.com/random_joke')
      .then ((r)=>{setIm2(r.data.setup);setIm3(r.data.punchline)})
      .catch((e)=>console.log(e));
    },[])
  return (
    <>
      <img src={im} alt="dog" style={{height:300}}/><br/><br/>
      <button onClick={()=>{setIm(
        axios.get('https://dog.ceo/api/breeds/image/random')
      .then ((r)=>setIm(r.data.message))
      .catch((e)=>console.log(e))
      )}}>Change dog</button><br/><br/>

      <img src={im1} alt="cat" style={{height:300}}/><br/><br/>
      <button onClick={()=>{setIm1(
        axios.get('https://api.thecatapi.com/v1/images/search')
      .then ((r)=>setIm1(r.data[0].url))
      .catch((e)=>console.log(e))
      )}}>Change cat</button><br/><br/>

      <h1>Setup : {im2}</h1>
      <h1>Punchline : {im3}</h1>
      <button onClick={()=>{setIm2(
        axios.get('https://official-joke-api.appspot.com/random_joke')
      .then ((r)=>{setIm2(r.data.setup);setIm3(r.data.punchline)})
      .catch((e)=>console.log(e))
      )}}>Change joke</button>
    </>
  )
}

export default Axiosd

// https://cdn2.thecatapi.com/images/MTg3MTY0Nw.jpg