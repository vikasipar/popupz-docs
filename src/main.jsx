import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PopzProvider } from 'popupz';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PopzProvider position="tr">
      <App />
    </PopzProvider>
  </React.StrictMode>,
)
