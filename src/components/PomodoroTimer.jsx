import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Timer finished
            setIsActive(false);
            if (!isBreak) {
              setMinutes(5); // Start break
              setIsBreak(true);
            } else {
              setMinutes(25); // Back to work
              setIsBreak(false);
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, isBreak]);

  const toggleTimer = () => setIsActive(!isActive);
  
  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setMinutes(25);
    setSeconds(0);
  };

  return (
    <div className="pomodoro-container">
      <h2 style={{ marginBottom: '1rem', color: isBreak ? 'var(--matcha-green)' : 'var(--accent)' }}>
        {isBreak ? 'Break Time! ✨' : 'Focus Time 📝'}
      </h2>
      <div className="timer-display">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="timer-controls">
        <button className="btn btn-primary" onClick={toggleTimer}>
          {isActive ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button className="btn btn-secondary" onClick={resetTimer}>
          <RotateCcw size={24} />
        </button>
      </div>
      <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        {isBreak ? 'Rest well, you\'ve done great!' : 'Stay focused, I\'m cheering for you!'}
      </p>
    </div>
  );
};

export default PomodoroTimer;
