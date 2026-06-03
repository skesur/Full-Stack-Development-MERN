import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Routing/Home'
import Contact from './Routing/Contact.jsx'
import About from './Routing/About.jsx'
import Products from './Routing/Products.jsx'
 
function Routed () {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact Us</Link>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/products" element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routed