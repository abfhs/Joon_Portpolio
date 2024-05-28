import '@picocss/pico';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BuildingScraping from './components/scraping/BuildingScraping';
import Introduce from './components/main/Introduce';
import PasswordPrompt from './components/main/PasswordPrompt';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Introduce />} />
        <Route path="/password" element={<PasswordPrompt />} />
        <Route path="/building-scraping" element={<BuildingScraping />} />
      </Routes>
    </Router>
  );
}

export default App;