import '@picocss/pico';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BuildingScraping from './components/scraping/BuildingScraping';
import Opening from './components/main/Opening';

function App() {
  return (
    <div>
      <Opening/>
      {/* <BuildingScraping/> */}
    </div>
  );
}

export default App;