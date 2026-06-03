// Create a Student Data Entry Form using React. Fields are Student Name 
// (input Field), Gender (Radio Button values are Boy, Girl), Subjects 
// (Dropdown values are English, Gujarati), Comments (textarea). When the 
// user Click on the Submit button , it will display an alert and use useState 
// hook.

import { useState } from "react"

const Form3 = () => {
    const [n,setN]=useState("")
    const [g,setG]=useState("")
    const [s,setS]=useState("")
    const [c,setC]=useState("")
    const f = (e) => {
        setG(e.target.value)
    }
    const a = () => {
        alert(`Student name : ${n}, Gender : ${g}, Subject : ${s}, Comments : ${c}`)
    }
  return (
    <>
        <form onSubmit={a}>
            Student name : <input type="text" name="sname" id="sname" onChange={(e)=>{setN(e.target.value)}}/><br/><br/>
            Student gender : 
            <input type="radio" name="gender" id="" value="Boy" onChange={f}/>Boy
            <input type="radio" name="gender" id="" value="Girl" onChange={f}/>Girl<br/><br/>
            Student Subjects :
            <select onChange={(e)=>{setS(e.target.value)}}>
                <option value="No Subject">Select Subject</option>
                <option value="English">English</option>
                <option value="Gujarati">Gujarati</option>
            </select><br/><br/>
            Comments : <textarea name="comment" onChange={(e)=>{setC(e.target.value)}}></textarea><br/><br/>
            <input type="submit" value="Submit" />
        </form>
    </>
  )
}

export default Form3