import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './pages/Customer/LoginPage/loginpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Trending from './pages/Customer/HomePage/HomePageDetails/Trending'
import Information from './pages/Customer/HomePage/HomePageDetails/Information'
import Content from './pages/Customer/HomePage/HomePageDetails/Content'
import Comment from './pages/Customer/HomePage/HomePageDetails/Comment'
import Review from './pages/Customer/HomePage/HomePageDetails/Review'
import News from './pages/Customer/HomePage/HomePageDetails/News'
import HomePage from './pages/Customer/HomePage/HomePage.component'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="trending" element={<Trending />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
