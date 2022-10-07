import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductContextProvider } from './context/product-context';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductContextProvider>
    <App />
  </ProductContextProvider>
);
