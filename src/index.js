import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ToDoContainer from './components/ToDoContainer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ToDoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
