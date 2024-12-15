import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Правильный импорт компонента App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Рендерим в элемент с id "root"
);
