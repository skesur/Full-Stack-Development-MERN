import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Countd from './Countd.jsx'
import Pb356 from './Pb356.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Countd /><br/>
    <br/>
    <Pb356 />
  </StrictMode>
)
