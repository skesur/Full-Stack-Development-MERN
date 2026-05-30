import { useState } from "react"

const Form1 = () => {
  const [t1,setT1]=useState("")
  const [t2,setT2]=useState("")
  return (
    <>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        First name : <input type="text" name="f" id="f" onChange={(e)=>{setT1(e.target.value)}}/><br/><br/>
        Last name : <input type="text" name="l" id="l" onChange={(e)=>{setT2(e.target.value)}}/><br/><br/>
        <input type="submit" value="submit"></input>
        <h2>First name : {t1}</h2>
        <h2>Last name : {t2}</h2>
      </form>
    </>
  )
}

export default Form1