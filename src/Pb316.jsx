// Write react js script to perform the tasks as asked below using functional component:
// 1)Add an array of objects which contains name and age of people. 
// 2)Apply filter to find people with age less than 40. And display name of all people using map 
// function. Use props.

import Pb316u from "./Pb316u.jsx"
const Pb316 = () => {
    let AO = [{
        "name":"a1",
        "age":45
    },{
        "name":"a2",
        "age":35
    },{
        "name":"a3",
        "age":40
    },{
        "name":"a4",
        "age":30
    },{
        "name":"a5",
        "age":42
    }]
  return (
    <>
        <Pb316u ao={AO}></Pb316u>
    </>
  )
}

export default Pb316