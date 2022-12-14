import React from 'react'
import { createRoot } from 'react-dom/client'

import App from '../components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.body.appendChild(document.createElement('div'))).
    render(<App />)
})
