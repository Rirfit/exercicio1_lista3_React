import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Lista from './components/ListaNomes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lista/>
  </StrictMode>,
)
