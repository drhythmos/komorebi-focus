import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AdvancedTimer from './AdvancedTimer';
import DsaResources from './DsaResources';
import Omikuji from './Omikuji';
import ZenGarden from './ZenGarden';
import LogicKoan from './LogicKoan';
import SpiritBuddy from './SpiritBuddy';

const Workspace = () => {
  const [workSessions, setWorkSessions] = useState(() => {
    return parseInt(localStorage.getItem('workSessions') || '0');
  });
  const [timerActive, setTimerActive] = useState(false);

  const handleWorkComplete = () => {
    const newCount = workSessions + 1;
    setWorkSessions(newCount);
    localStorage.setItem('workSessions', newCount.toString());
  };

  const handleStatusChange = (isActive) => {
    setTimerActive(isActive);
  };

  return (
    <div className="workspace-grid">
      {/* Left Panel: Progress & Logic */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <TodoList />
        <ZenGarden workSessions={workSessions} />
        <LogicKoan />
      </div>

      {/* Center Panel: Focus & Fortune */}
      <div className="workspace-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3>Deep Focus / 集中</h3>
        <SpiritBuddy isActive={timerActive} />
        <AdvancedTimer onWorkComplete={handleWorkComplete} onStatusChange={handleStatusChange} />
        <div style={{ padding: '0 1rem 1rem', width: '100%' }}>
          <Omikuji />
        </div>
      </div>

      {/* Right Panel: Resources & Patterns */}
      <DsaResources />
    </div>
  );
};

export default Workspace;
