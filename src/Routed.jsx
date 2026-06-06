import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import Products from './Products.jsx'
import Nopage from './Nopage.jsx'
 
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
          <Route path="*" element={<Nopage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routed