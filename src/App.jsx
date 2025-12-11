import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Lineup from './components/Lineup';
import MySchedule from './components/MySchedule';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    document.body.setAttribute('data-bs-theme', savedMode ? 'dark' : 'light');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    document.body.setAttribute('data-bs-theme', newMode ? 'dark' : 'light');
  };

  return (
    <HashRouter>
      <div className="d-flex flex-column min-vh-100">
        <NavigationBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lineup" element={<Lineup />} />
            <Route path="/schedule" element={<MySchedule />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;