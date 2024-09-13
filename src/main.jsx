import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Projects from './pages/Projects.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App></App>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
