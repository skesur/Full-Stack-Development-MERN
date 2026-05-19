import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Testapp from './Testapp.jsx'
import Secondapp from './Secondapp.jsx'
import Rules from './Rules.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Testapp />
    <Secondapp/>
    {/* <App /> */}
    <Rules />
  </StrictMode>
)
