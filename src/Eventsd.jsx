const Eventsd = () => {
  return (
    <>
        <form onSubmit={()=>confirm("Are you sure")}>
            Test : <input type="text" onChange={(dets)=>console.log(dets.target.value)}/><br/><br />
            <button type="button" onClick={()=>alert("I am clicked")}>onClick</button><br /><br />
            <button type="button" onDoubleClick={()=>alert("I am clicked again")}>onDoubleClick</button><br /><br />
            <button type="submit">onSubmit</button>
        </form>
    </>
  )
}

export default Eventsd