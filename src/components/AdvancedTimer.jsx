import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Settings, Activity } from 'lucide-react';

const AdvancedTimer = ({ onWorkComplete, onStatusChange }) => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('work'); // work, short, long
  const [config, setConfig] = useState({ work: 25, short: 5, long: 15 });
  const [showSettings, setShowSettings] = useState(false);
  const [complexity, setComplexity] = useState('O(1)'); // O(1), O(n), O(n^2), O(2^n)

  useEffect(() => {
    if (onStatusChange) onStatusChange(isActive);
  }, [isActive]);

  const totalSeconds = config[mode] * 60;
  const currentSeconds = minutes * 60 + seconds;
  const progress = ((totalSeconds - currentSeconds) / totalSeconds) * 100;
  
  const circumference = 2 * Math.PI * 135; // r=135
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Complexity Aura Logic
  const getAuraClass = () => {
    if (!isActive || mode !== 'work') return '';
    if (complexity === 'O(1)') return 'aura-stable';
    if (complexity === 'O(n)') return 'aura-linear';
    if (complexity === 'O(n^2)') return 'aura-quadratic';
    if (complexity === 'O(2^n)') return 'aura-exponential';
    return '';
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setIsActive(false);
            playNotification();
            handleTimerComplete();
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const handleTimerComplete = () => {
    if (mode === 'work') {
      setMode('short');
      setMinutes(config.short);
      if (onWorkComplete) onWorkComplete();
    } else {
      setMode('work');
      setMinutes(config.work);
    }
    setSeconds(0);
  };

  const playNotification = () => {
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
    audio.play().catch(e => console.log('Audio playback prevented'));
  };

  const toggleTimer = () => setIsActive(!isActive);
  
  const resetTimer = () => {
    setIsActive(false);
    setMinutes(config[mode]);
    setSeconds(0);
  };

  const changeMode = (newMode) => {
    setMode(newMode);
    setMinutes(config[newMode]);
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className="advanced-timer">
      <div className="timer-modes" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        {['work', 'short', 'long'].map(m => (
          <button 
            key={m}
            className={`btn ${mode === m ? 'active' : ''}`}
            onClick={() => changeMode(m)}
            style={{ 
              fontSize: '0.7rem', 
              padding: '0.4rem 1rem',
              borderColor: mode === m ? 'var(--accent-gold)' : 'var(--border)',
              color: mode === m ? 'var(--accent-gold)' : 'var(--text-muted)'
            }}
          >
            {m}
          </button>
        ))}
      </div>

      <div className={`timer-circle ${getAuraClass()}`}>
        <svg className="timer-svg">
          <circle className="timer-bg" cx="150" cy="150" r="135" />
          <circle 
            className="timer-progress" 
            cx="150" cy="150" r="135" 
            style={{ 
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset 
            }}
          />
        </svg>
        <div className="timer-text">
          <span className="timer-time">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </span>
          <span className="timer-label">{mode}</span>
        </div>
      </div>

      <div className="timer-controls">
        <button className="btn btn-icon" onClick={toggleTimer}>
          {isActive ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button className="btn btn-icon" onClick={resetTimer}>
          <RotateCcw size={20} />
        </button>
        <button className="btn btn-icon" onClick={() => setShowSettings(!showSettings)}>
          <Settings size={20} />
        </button>
      </div>

      {showSettings && (
        <div className="timer-settings animate-fadeIn">
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            {Object.keys(config).map(key => (
              <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <label style={{ fontSize: '0.6rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{key}</label>
                <input 
                  type="number" 
                  value={config[key]} 
                  onChange={(e) => setConfig({...config, [key]: parseInt(e.target.value) || 1})}
                  style={{ width: '40px', background: 'none', border: '1px solid var(--border)', color: 'var(--text-primary)', textAlign: 'center', borderRadius: '4px' }}
                />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
            <span style={{ width: '100%', fontSize: '0.6rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem', textAlign: 'center' }}>Complexity Aura</span>
            {['O(1)', 'O(n)', 'O(n^2)', 'O(2^n)'].map(c => (
              <button 
                key={c} 
                className={`btn ${complexity === c ? 'active' : ''}`}
                onClick={() => setComplexity(c)}
                style={{ fontSize: '0.6rem', padding: '0.3rem 0.6rem' }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedTimer;
