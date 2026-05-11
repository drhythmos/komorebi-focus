import React, { useEffect, useState } from 'react';

const SakuraPetals = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Increased petal count and reduced delay for immediate visibility
    const petalCount = 25;
    const newPetals = Array.from({ length: petalCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      duration: 6 + Math.random() * 8 + 's', // Faster fall
      delay: Math.random() * 10 + 's', // Shorter delay
      size: 15 + Math.random() * 15 + 'px', // Slightly larger
      rotation: Math.random() * 360 + 'deg'
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="sakura-container">
      {petals.map(petal => (
        <div 
          key={petal.id}
          className="petal"
          style={{
            left: petal.left,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
            width: petal.size,
            height: petal.size,
            transform: `rotate(${petal.rotation})`
          }}
        />
      ))}
    </div>
  );
};

export default SakuraPetals;
