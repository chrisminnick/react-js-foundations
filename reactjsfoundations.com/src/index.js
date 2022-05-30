import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ScrollToTop from './ScrollToTop';

const container = document.getElementById('root');

if (container.hasChildNodes()) {
  hydrateRoot(
    container,
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  );
} else {
  createRoot(container).render(
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  );
}
