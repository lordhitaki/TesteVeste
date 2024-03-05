import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  root
);

reportWebVitals();
