import { createContext } from "react"
import C1 from "./C1";
import C2 from "./C2";

const Fname = createContext();
const Lname = createContext();

const Contextd = () => {
  return (
    <>
        <Fname.Provider value="Saumya">
            <Lname.Provider value="Kesur">
                <C1/>
                <C2/>
            </Lname.Provider>
        </Fname.Provider>
    </>
  )
}

export default Contextd
export {Fname}
export {Lname}