import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './Portfolio';
import reportWebVitals from './reportWebVitals';
import { ParallaxProvider } from 'react-scroll-parallax';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <Portfolio />
    </ParallaxProvider>
  </React.StrictMode>
);

reportWebVitals();
