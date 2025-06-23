import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import App from './App.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
=======
import Gal from './Gallery.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Gal />
>>>>>>> 10ffdef1c8f99e41d10670e45faf671170c5130c
  </StrictMode>,
)
