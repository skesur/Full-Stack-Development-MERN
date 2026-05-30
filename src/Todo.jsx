import { useState } from "react"

const Todo = () => {
    const [task, setTask] = useState("")
    const [tList,setList]=useState([]);
  return (
    <>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            Task : <input type="text" name="t" id="" onChange={(e)=>{setTask(e.target.value)}}/><br/>
            <input type="submit" value="+" onClick={()=>{setList([...tList,{id:Date.now(),tname:task}])}}/><br/>
            {tList.map((t)=><><h2>{t.tname}</h2><button onClick={()=>delete(t.id)}>-</button></>)}
        </form>
    </>
  )
}

export default Todo