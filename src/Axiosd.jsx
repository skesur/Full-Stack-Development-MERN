import axios from 'axios'
import { useEffect, useState } from 'react'

const Axiosd = () => {
    var [im,setIm] = useState(null)
    useEffect(()=>{axios.get('https://dog.ceo/api/breeds/image/random')})
  return (
    <>

    </>
  )
}

export default Axiosd