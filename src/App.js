import '@picocss/pico';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PasswordPrompt from './components/main/PasswordPrompt';
import BuildingScraping from './components/scraping/BuildingScraping';
import { AuthProvider } from './components/main/AuthContext';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* <Route path="/password" element={<PasswordPrompt />} /> */}
          <Route path="/" element={<BuildingScraping />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;