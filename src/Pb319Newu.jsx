const Pb319Newu = (s) => {
  return (
    <>
        <div style={{height:350,width:200,borderRadius:20,backgroundColor:"black",color:"orange",display:"flex",
        flexDirection:"column",justifyContent:"center",alignItems:"center",margin:10
        }}>
            <h1>{s.pname}</h1>
            <img src={s.img} style={{height:150,borderRadius:20}}></img>
            <h3>{s.price}</h3>
            <button style={{height:30,backgroundColor:"purple",border:0,borderRadius:20,fontSize:15,color:"orange",fontWeight:"bold"}} 
            onClick={()=>alert("Added in Cart")}>Add to Cart</button>
        </div>
    </>
  )
}

export default Pb319Newu