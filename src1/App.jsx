import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Catalog from './Catalog'
import Products from './Products'
import Cart from './Cart'
import Home from './Home'
import ProductDetails from './ProductDetails'

const App = () => {
  return (
    <>
        <BrowserRouter>
        <Link to="/">Home</Link><br/>
        <Link to="/catalog">Catalog</Link><br/>
        <Link to="/cart">Cart</Link><br/>
        <Link to="/products">Products</Link><br/><br/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/catalog" element={<Catalog/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/productdetails" element={<ProductDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App