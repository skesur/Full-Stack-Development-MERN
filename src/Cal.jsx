import { useReducer } from "react";

const Cal = () => {
    const red = (c,action) => {
        return action.val
    }
    const open = (c,action) => {
        if (action.type=="add") return n1+n2;
        else if (action.type=="sub") return n1-n2;
        else if (action.type=="mul") return n1*n2;
        else if (action.type=="div") return n1/n2;
    }
    const resu = () => {
        if (op=="add") return n1+n2;
        else if (op=="sub") return n1-n2;
        else if (op=="mul") return n1*n2;
        else if (op=="div") return n1/n2;
    }
    
    var [n1,setN1] = useReducer(red,0);
    var [n2,setN2] = useReducer(red,0);
    var [op,setOp] = useReducer(open,"");
    var [res,setRes] = useReducer(resu,0);
    
  return (
    <>
        No1 : <input type="number" name="n1" id="" onChange={(e)=>{setN1({"type":"n1","val":e})}}/><br/><br/>
        No2 : <input type="number" name="n2" id="" onChange={(e)=>{setN2({"type":"n1","val":e})}}/><br/><br/>
        Operation :
            <select onChange={(e)=>{setOp({"type":e.target.value})}}>
                <option value="add">Add</option>
                <option value="sub">Sub</option>
                <option value="mul">Mul</option>
                <option value="div">Div</option>
            </select><br/><br/>
        <input type="button" value="Calculate" onClick={()=>{setRes()}}/>
        Result : <h1>{res}</h1>
    </>
  )
}

export default Cal