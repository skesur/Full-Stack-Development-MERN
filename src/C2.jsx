import { useContext } from "react"
import { Fname,Lname } from './Contextd'

const C2 = () => {
    var f = useContext(Fname)
    var l = useContext(Lname)
  return (
    <>
        <h1 style={{color:"blue"}}>{f}{" "}{l}</h1>
    </>
  )
}

export default C2