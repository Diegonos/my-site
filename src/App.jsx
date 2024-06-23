import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import './output.css'; // Assicurati che Tailwind CSS sia importato qui
import Jobs from './Pages/Jobs/Jobs';
import Education from './Pages/Education/Education';

function App() {
  return (
    <Router>
      <div className="font-sans bg-blue-50 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow mx-5 my-5 p-5 rounded-lg shadow-lg bg-white">
          <Routes>
            <Route path="/my-site/" element={<Home />} />
            <Route path="/my-site/jobs" element={<Jobs />} />
            <Route path="/my-site/education" element={<Education />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
