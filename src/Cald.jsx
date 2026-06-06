import { createContext, useState } from "react"
import Add from "./Add";
import Sub from "./Sub";

const N1 = createContext();
const N2 = createContext();

const Cald = () => {
    const [n1,setN1] = useState(0);
    const [n2,setN2] = useState(0);
    const [op,setOp] = useState("");
  return (
    <>
        <form>
            n1 : <input type="number" name="n1" id="n1" onChange={(e)=>{setN1(e.target.value)}}/><br/><br/>
            n2 : <input type="number" name="n2" id="n2" onChange={(e)=>{setN2(e.target.value)}}/><br/><br/>
            <input type="button" value="Add" onClick={(e)=>{setOp(e.target.value)}}/>
            <input type="button" value="Sub" onClick={(e)=>{setOp(e.target.value)}}/>
        </form>
        <N1.Provider value={n1}>
            <N2.Provider value={n2}>
                {op=="Add" && <Add/>}
                {op=="Sub" && <Sub/>}
            </N2.Provider>
        </N1.Provider>
    </>
  )
}

export default Cald
export {N1}
export {N2}