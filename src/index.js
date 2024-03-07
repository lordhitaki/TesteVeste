import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import List from './pages/list';

const root = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  root
);

reportWebVitals();
