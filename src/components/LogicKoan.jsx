import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

const koans = [
  { q: "How do you find the loop's beginning in a linked list, just as I find my way back to you?", a: "Floyd's Cycle-Finding algorithm. The slow and fast pointers will meet, and the distance from the head to the start is the same as from the meeting point to the start." },
  { q: "If your heart is a graph, how do we visit every chamber in the shortest path?", a: "Dijkstra's Algorithm. We greedily pick the closest unvisited node, ensuring no love is left unexplored in the most efficient way." },
  { q: "Two souls, two pointers, moving toward each other in a sorted world. What do they find?", a: "The Target Sum. By moving from both ends, they meet exactly where they are meant to be." },
  { q: "How can a massive problem be broken into tiny pieces, each one smaller than the last?", a: "Recursion. We solve the smallest unit of love, and the rest of the world builds itself upon that foundation." },
  { q: "In a world of infinite choices, how do we decide which one is best without looking back?", a: "Dynamic Programming. We remember the beauty of the past to build the most optimal future together." }
];

const LogicKoan = () => {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextKoan = () => {
    setIndex((index + 1) % koans.length);
    setShowAnswer(false);
  };

  return (
    <div className="workspace-panel koan-panel">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--vermilion)' }}>
        <HelpCircle size={16} />
        <span className="tool-title">Logic Kōan / 公案</span>
      </div>
      <div className="koan-content">
        <p className="koan-question">"{koans[index].q}"</p>
        
        {showAnswer ? (
          <div className="koan-answer animate-fadeIn">
            <p>{koans[index].a}</p>
            <button className="btn" onClick={nextKoan} style={{ marginTop: '1rem', fontSize: '0.7rem' }}>Next Kōan</button>
          </div>
        ) : (
          <button className="btn btn-secondary" onClick={() => setShowAnswer(true)} style={{ width: '100%', fontSize: '0.7rem' }}>Seek Wisdom</button>
        )}
      </div>
    </div>
  );
};

export default LogicKoan;
