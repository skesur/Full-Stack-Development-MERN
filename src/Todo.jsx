import { useState } from "react"

const Todo = () => {
    const [task, setTask] = useState("");
    const [tList,setList]=useState([]);
    const f = (e) => {
      setTask(e.target.value)
    }
    const addT = () => {
      if (task.trim()=="") return;
      else {
        setList([...tList,{id:Date.now(),tname:task}])
        setTask("")
      }
    }
    const delT = (i) => {
      setList(tList.filter((t1)=>t1.id!=i));
    }

  return (
    <>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            Task : <input type="text" name="t" id="" onChange={f}/><br/>
            <input type="submit" value="+" onClick={addT}/><br/>
            {tList.map((t)=><><h2>{t.tname}</h2><button onClick={()=>delT(t.id)}>-</button></>)}
        </form>
    </>
  )
}

export default Todo