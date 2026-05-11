import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const fortunes = [
  { level: '大吉', title: 'Dai-kichi (Great Blessing)', msg: 'The stars align for your love and your code. Today, he will see the light in your eyes and a difficult bug will vanish!' },
  { level: '中吉', title: 'Chu-kichi (Middle Blessing)', msg: 'Success is brewing like fine tea. Your efforts for him and your algorithms are perfectly balanced today.' },
  { level: '小吉', title: 'Sho-kichi (Small Blessing)', msg: 'A small victory awaits in your next commit. Love grows in the quiet moments you share together.' },
  { level: '吉', title: 'Kichi (Blessing)', msg: 'Steady progress is the best progress. He is thinking of your smile right at this very moment.' },
  { level: '末吉', title: 'Sue-kichi (Future Blessing)', msg: 'The seed is planted. With patience, your bond and your career will flourish like Sakura in spring.' },
  { level: '大吉', title: 'Dai-kichi (Great Blessing)', msg: 'A shared bowl of ramen tonight will bring a secret revelation. He is truly lucky to have you.' }
];

const Omikuji = () => {
  const [isShaking, setIsShaking] = useState(false);
  const [fortune, setFortune] = useState(null);

  const drawFortune = () => {
    if (isShaking) return;
    setIsShaking(true);
    setFortune(null);
    
    // Shake for 1.5s then show fortune
    setTimeout(() => {
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      setFortune(randomFortune);
      setIsShaking(false);
    }, 1500);
  };

  return (
    <div className="workspace-panel omikuji-panel">
      <h3>Daily Omikuji / おみくじ</h3>
      <div className="omikuji-content">
        <div className={`omikuji-box ${isShaking ? 'shaking' : ''}`} onClick={drawFortune}>
          <div className="omikuji-hole"></div>
          <span className="omikuji-label">抽<br/>籤</span>
        </div>
        
        {fortune && (
          <div className="fortune-result">
            <div className="fortune-level">{fortune.level}</div>
            <div className="fortune-details">
              <h4>{fortune.title}</h4>
              <p>{fortune.msg}</p>
            </div>
          </div>
        )}
        
        {!fortune && !isShaking && (
          <p className="omikuji-hint">Click the box to draw your fortune for today...</p>
        )}
        
        {isShaking && (
          <p className="omikuji-hint">The universe is deciding...</p>
        )}
      </div>
      <Sparkles size={16} className="omikuji-sparkle" />
    </div>
  );
};

export default Omikuji;
