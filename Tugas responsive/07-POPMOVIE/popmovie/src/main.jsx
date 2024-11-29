import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ratings from './components/StarRatings.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Ratings max={10} size={24} color="#fcc419"/> */}
  </StrictMode>,
)