import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/App.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Slider from '../src/Component/Home/slider'

import Navbar from './Component/Nav/Navbar';
import Home from './Component/Home/Home';
import SliderNew from './Component/Home/SliderNew';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
 

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
