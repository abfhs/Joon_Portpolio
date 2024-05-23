import '@picocss/pico';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BuildingScraping from './components/scraping/BuildingScraping';
import Introduce from './components/main/Introduce';

function App() {
  return (
    <div>
      <Introduce/>
      {/* <BuildingScraping/> */}
    </div>
  );
}

export default App;