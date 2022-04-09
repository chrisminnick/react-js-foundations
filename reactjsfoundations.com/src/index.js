import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ScrollToTop from './ScrollToTop';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>
);
