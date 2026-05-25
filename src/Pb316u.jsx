const Pb316u = (s) => {
    let n = s.ao
  return (
    <>
        {n.filter((x)=>x.age<40).map((y)=><><p>{y.name}</p></>)}
    </>
  )
}

export default Pb316u