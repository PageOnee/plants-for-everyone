/// Librerias de react
import React from 'react'
import ReactDOM from 'react-dom/client'

/// Componente principal
import App from './App.tsx'

/// Estilos
import './styles/index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
