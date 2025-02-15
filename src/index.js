// filepath: /e:/note-taking/webapp/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './screen/App/App';
import Home from './screen/Home/Home';
import TypePract from './screen/TypePract/TypePract.tsx';
import MainLayout from './components/MainLayout/MainLayout';
import reportWebVitals from './reportWebVitals';
import AboutUs from './screen/AboutUs/aboutus.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="app" element={<App />} />
          <Route path="type" element={<TypePract />} />
          <Route path='aboutus' element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();