// Create a React app with three components: parent component P.js and two 
// child components C1.js, C2.js.
//  Use useContext hook to pass two colors from the Parent component P.js 
// to the Child component C2.js. (Yellow color as font color and Blue color as 
// background color)
// In Child component C1.js import child component C2.js .
// In C2.js display “Full stack Development” text in h1 heading with above 
// mentioned background color and font color using context

import { createContext } from "react"
import C11 from "./C11";
const Col = createContext();
const Bcol = createContext();

const Pb379 = () => {
  return (
    <>
        <Col.Provider value="yellow">
            <Bcol.Provider value="blue">
                <C11/>
            </Bcol.Provider>
        </Col.Provider>
    </>
  )
}

export default Pb379
export {Col}
export {Bcol}