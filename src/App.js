import '@picocss/pico';
import React, { useState } from 'react';
import './styles/App.css'; // CSS 파일 임포트
import 'bootstrap/dist/css/bootstrap.min.css';
import BuildingScraping from './components/scraping/BuildingScraping';

function App() {
  return (
    <div>
      <BuildingScraping/>
    </div>
  );
}

export default App;