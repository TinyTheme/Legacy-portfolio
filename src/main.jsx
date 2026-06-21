// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
// CHANGED: Import HashRouter instead of BrowserRouter
import { HashRouter, Routes, Route } from "react-router-dom";
import App from './App'
import Projects from './Projects' 
import ProjectPage from './ProjectPage'
import About from './About.jsx'
import Header from './Header'; 
import ScrollToTop from './ScrollToTop.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Header /> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)