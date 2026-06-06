import { useContext } from "react"
import { fid } from './Catalog'

const ProductDetails = () => {
    var f = useContext(fid)
  return (
    <>
        <p>Price : {f.price}</p>
    </>
  )
}

export default ProductDetails