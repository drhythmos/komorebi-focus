import React from 'react';

const SpiritBuddy = ({ isActive }) => {
  return (
    <div className="spirit-buddy-container">
      <div className={`buddy-wrapper ${isActive ? 'studying' : 'sleeping'}`}>
        {/* The Buddy (Red Panda / Fox vibe) */}
        <div className="buddy-body">
          <div className="buddy-ears"></div>
          <div className="buddy-face">
            <div className="buddy-eyes"></div>
            <div className="buddy-nose"></div>
          </div>
          <div className="buddy-tail"></div>
          
          {isActive && (
            <div className="tiny-scroll animate-float">
              <div className="scroll-paper">巻物</div>
            </div>
          )}
        </div>
        
        <div className="buddy-platform"></div>
        
        <div className="buddy-status">
          {isActive ? 'SHHH... HE IS STUDYING' : 'ZEN RESTING...'}
        </div>
      </div>
    </div>
  );
};

export default SpiritBuddy;
