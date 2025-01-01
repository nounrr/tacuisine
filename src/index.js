import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Crée une racine React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application principale
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mesure des performances
reportWebVitals();
