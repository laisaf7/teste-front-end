import React from 'react';
import ReactDOM from 'react-dom/client';
// Note as chaves {} na importação do App
import { App } from './App'; 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);