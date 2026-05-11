import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import FoodGallery from './components/FoodGallery';
import Workspace from './components/Workspace';
import SakuraPetals from './components/SakuraPetals';

function App() {
  return (
    <Router>
      <SakuraPetals />
      <div className="container">
        <header>
          <span className="ja-title">木漏れ日の集中</span>
          <h1>Komorebi Focus</h1>
          <p>Zen Aesthetics & Algorithm Dojo</p>
          <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--vermilion)', letterSpacing: '0.3rem', fontWeight: 500 }}>
            ディビアンシュのために / FOR DIVYANSHU
          </div>
        </header>

        <nav>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Gallery / 画廊
          </NavLink>
          <NavLink to="/timer" className={({ isActive }) => (isActive ? 'active' : '')}>
            Zen Space / 禅
          </NavLink>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<FoodGallery />} />
            <Route path="/timer" element={<Workspace />} />
          </Routes>
        </main>

        <footer style={{ textAlign: 'center', padding: '10rem 0 5rem', color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '0.5rem', textTransform: 'uppercase' }}>
          静寂、味、そして集中。
        </footer>
      </div>
    </Router>
  );
}

export default App;
