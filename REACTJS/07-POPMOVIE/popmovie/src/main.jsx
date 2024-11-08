import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StarRatings from './components/StarRatings.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <StarRatings
      max={5}
      size={24}
      color="#fcc419"
    /> */}
  </StrictMode>,
)
