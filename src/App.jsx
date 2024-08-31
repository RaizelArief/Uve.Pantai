import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Induk/Home';
import "./style/landingPage.css";
import Index from './Induk/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
