import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Analytics } from './components/Analytics'
import { basePath } from './site'
import './fonts/fonts.css'
import './index.css'

const root = document.getElementById('root')!
const app = (
  <React.StrictMode>
    <BrowserRouter basename={basePath}>
      <App />
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>
)

// Query filters and the Pages fallback can differ from the static snapshot.
const path = window.location.pathname.slice(basePath.length - 1);
if (root.dataset.prerendered === path && !window.location.search) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
