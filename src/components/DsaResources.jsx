import React, { useState } from 'react';
import { ExternalLink, Code, Database, Terminal, ScrollText } from 'lucide-react';

const patterns = [
  { name: 'Sliding Window', desc: 'Used for sub-arrays/sub-strings. Like looking through a telescope at his favorite stars.' },
  { name: 'Two Pointers', desc: 'Approaching from both ends to meet in the middle, just like our two hearts.' },
  { name: 'Fast & Slow Pointers', desc: 'Detecting loops and cycles. Finding our way through the maze of life together.' },
  { name: 'Merge Intervals', desc: 'Combining overlapping moments into one beautiful, shared memory.' },
  { name: 'Cyclic Sort', desc: 'Putting things in their proper place, so we have more time for love.' },
  { name: 'Backtracking', desc: 'Exploring every path to find the one that leads us to each other.' },
  { name: 'Topological Sort', desc: 'Ordering tasks with dependencies, so we can focus on what truly matters.' }
];

const resourceCategories = [
  {
    title: 'Practice Hubs',
    icon: <Code size={16} />,
    links: [
      { name: 'LeetCode', url: 'https://leetcode.com' },
      { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org' },
      { name: 'NeetCode', url: 'https://neetcode.io' },
    ]
  },
  {
    title: 'Curated Sheets',
    icon: <Terminal size={16} />,
    links: [
      { name: 'Striver SDE Sheet', url: 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/' },
      { name: 'Blind 75', url: 'https://www.leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions' },
    ]
  },
  {
    title: 'System Design',
    icon: <Database size={16} />,
    links: [
      { name: 'ByteByteGo', url: 'https://bytebytego.com' },
      { name: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' },
    ]
  }
];

const DsaResources = () => {
  const [activeTab, setActiveTab] = useState('resources'); // resources, patterns

  return (
    <div className="workspace-panel">
      <div className="tab-header" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)' }}>
        <button 
          className={`tab-btn ${activeTab === 'resources' ? 'active' : ''}`} 
          onClick={() => setActiveTab('resources')}
        >
          Links
        </button>
        <button 
          className={`tab-btn ${activeTab === 'patterns' ? 'active' : ''}`} 
          onClick={() => setActiveTab('patterns')}
        >
          Patterns
        </button>
      </div>

      {activeTab === 'resources' ? (
        <div className="resource-list animate-fadeIn" style={{ flex: 1, overflowY: 'auto' }}>
          {resourceCategories.map((cat, i) => (
            <div key={i} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem', color: 'var(--vermilion)' }}>
                {cat.icon}
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{cat.title}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {cat.links.map((link, j) => (
                  <a key={j} href={link.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                    {link.name} <ExternalLink size={12} style={{ opacity: 0.5 }} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="pattern-scroll animate-fadeIn" style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--matcha)' }}>
            <ScrollText size={16} />
            <span className="tool-title">Pattern Scroll / 巻物</span>
          </div>
          {patterns.map((p, i) => (
            <div key={i} className="pattern-item" style={{ marginBottom: '1.2rem', paddingBottom: '0.8rem', borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--ink-black)', marginBottom: '0.3rem' }}>{p.name}</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: '1.4' }}>{p.desc}</p>
            </div>
          ))}
        </div>
      )}
      
      <p style={{ marginTop: 'auto', fontSize: '0.7rem', color: 'var(--text-muted)', textAlign: 'center', fontStyle: 'italic' }}>
        {activeTab === 'resources' ? '"Knowledge is the path."' : '"Patterns of love and logic."'}
      </p>
    </div>
  );
};

export default DsaResources;
