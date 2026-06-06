import { useState } from "react";
function Formadvanced()
{
    var [data,setdata]=useState({});
    return(<>
        <form style={{width:"300px",margin:"auto",padding:"20px",border:"2px solid black",borderRadius:"10px"}} onSubmit={(e)=>e.preventDefault()}>
        Name: <input type="text" name="name" onChange={f}/><br/><br/>
        Password: <input type="password" name="pass" onChange={f}/><br/><br/>
        Email: <input type="email" name="email" onChange={f}/><br/><br/>
        Mobile: <input type="number" name="mobile" onChange={f}/><br/><br/>
        Gender:
        <input type="radio" name="gender" value="Male" onChange={f}/>Male
        <input type="radio" name="gender" value="Female" onChange={f}/>Female
        <br/><br/>
        City:
        <select name="city" onChange={f}>
            <option>Select</option>
            <option>Ahmedabad</option>
            <option>Surat</option>
            <option>Rajkot</option>
        </select>
        <br/><br/>
        Skills:
        <input type="checkbox" name="html" value="html" onChange={f}/>HTML
        <input type="checkbox" name="css" onChange={f} value="css" />CSS
        <input type="checkbox" name="js" onChange={f} value="js" />JS
        <br/><br/>
        Address:
        <textarea name="address" onChange={f}></textarea>
        <br/><br/>
        DOB: <input type="date" name="dob" onChange={f}/><br/><br/>
        Color: <input type="color" name="color" onChange={f}/><br/><br/>
        
        <input type="submit"/>
    </form>
    <h3>{JSON.stringify(data)}</h3>
    </>)
    function f(e)
    {
        setdata({...data,[e.target.name]:e.target.value})
    // If you use checkboxes in your code    
        if(e.target.type=="checkbox")
    {
        setdata({...data,[e.target.name]:e.target.checked})
    }
    else
    {
        setdata({...data,[e.target.name]:e.target.value})
    }
    }
}
export default Formadvanced