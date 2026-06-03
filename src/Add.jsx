import { useContext } from "react"
import { N1,N2 } from './Cald'

const Add = () => {
    var n1 = useContext(N1)
    var n2 = useContext(N2)
  return (
    <>
        <h1>Result : {parseInt(n1)+parseInt(n2)}</h1>
    </>
  )
}

export default Add