import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './layouts/Header.jsx'
import App from './App.jsx'
import Footer from './layouts/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <App />
    <Footer/>
  </StrictMode>
);