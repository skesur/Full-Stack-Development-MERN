// Create React app to pass color(red), background color(yellow), font size(25px) and font 
// style(italic) as properties to component and apply css to "Lj Students" text written in p tag. use 
// Props
const Pb306u = (s) => {
  return (
    <>
        <p style={{color:s.c,background:s.bg,fontSize:s.fs,fontStyle:s.fst}}>LJKU Student</p>
    </>
  )
}

export default Pb306u