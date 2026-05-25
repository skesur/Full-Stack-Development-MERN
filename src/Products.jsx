import Productsu from "./Productsu.jsx";

const Products = () => {
  return (
    <div style={{display:"flex"}}>
        <Productsu pname="S1" img="i1.png" price={1000}></Productsu>
        <Productsu pname="S2" img="i2.png" price={1200}></Productsu>
        <Productsu pname="S3" img="i3.png" price={900}></Productsu>
        <Productsu pname="S4" img="i4.png" price={1500}></Productsu>
    </div>
  )
}

export default Products