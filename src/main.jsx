import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div style={{padding:'40px', fontFamily:'Arial'}}>
      <h1>Gulf Shores Living</h1>
      <p>If you can see this, the site is working.</p>
      <a href="tel:2513228464">Call 251-322-8464</a>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
