import { useContext } from "react"
import { Col,Bcol } from './Pb379'

const C12 = () => {
    var c = useContext(Col)
    var b = useContext(Bcol)
  return (
    <>
        <h1 style={{color:c,backgroundColor:b}}>Full stack Development</h1>
    </>
  )
}

export default C12