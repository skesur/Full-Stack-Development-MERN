import { useContext } from "react"
import { Fname,Lname } from './Contextd'

const C1 = () => {
    var f = useContext(Fname)
    var l = useContext(Lname)
  return (
    <>
        <h1 style={{color:"red"}}>{f}{" "}{l}</h1>
    </>
  )
}

export default C1