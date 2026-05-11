import React, { useState, useEffect } from 'react';
import { Flower2 } from 'lucide-react';

const gardenAssets = ['🌸', '🎍', '🌳', '🪨', '🎋', '🍀', '🌼', '🌾'];

const ZenGarden = ({ workSessions }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Load existing garden or create new one based on sessions
    const savedGarden = JSON.parse(localStorage.getItem('zenGarden') || '[]');
    
    if (savedGarden.length < workSessions) {
      // Add new items for new sessions
      const newItems = [...savedGarden];
      for (let i = savedGarden.length; i < workSessions; i++) {
        newItems.push({
          icon: gardenAssets[Math.floor(Math.random() * gardenAssets.length)],
          top: Math.random() * 80 + 10 + '%',
          left: Math.random() * 80 + 10 + '%',
          rotation: Math.random() * 360 + 'deg',
          scale: 0.8 + Math.random() * 0.5
        });
      }
      setItems(newItems);
      localStorage.setItem('zenGarden', JSON.stringify(newItems));
    } else {
      setItems(savedGarden);
    }
  }, [workSessions]);

  return (
    <div className="workspace-panel garden-panel">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--matcha)' }}>
        <Flower2 size={16} />
        <span className="tool-title">Zen Focus Garden / 庭</span>
      </div>
      <div className="garden-container">
        <div className="garden-sand">
          {items.map((item, i) => (
            <div 
              key={i} 
              className="garden-item"
              style={{ 
                top: item.top, 
                left: item.left, 
                transform: `rotate(${item.rotation}) scale(${item.scale})`,
                animation: 'popIn 0.5s ease-out'
              }}
            >
              {item.icon}
            </div>
          ))}
          {items.length === 0 && (
            <p className="garden-empty-msg">
              Your garden is waiting... <br/>
              Complete a focus session to plant your first seed.
            </p>
          )}
        </div>
      </div>
      <p style={{ marginTop: '1rem', fontSize: '0.7rem', color: 'var(--text-muted)', textAlign: 'center' }}>
        Total focus harvests: <strong>{items.length}</strong>
      </p>
    </div>
  );
};

export default ZenGarden;
