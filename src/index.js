import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
const root = document.getElementById('root')

ReactDOM.render( app, root);

reportWebVitals();
