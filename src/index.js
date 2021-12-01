import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ToDoContainer from './components/ToDoContainer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ToDoContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
