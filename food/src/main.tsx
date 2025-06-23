import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Gal from './Gallery.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Gal />
  </StrictMode>,
)
