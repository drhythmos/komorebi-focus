import React, { useState } from 'react';
import { Target, ExternalLink } from 'lucide-react';

const problems = [
  { name: 'Two Sum', topic: 'Array', url: 'https://leetcode.com/problems/two-sum/' },
  { name: 'Longest Substring Without Repeating Characters', topic: 'String', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
  { name: 'Merge Intervals', topic: 'Array', url: 'https://leetcode.com/problems/merge-intervals/' },
  { name: 'Linked List Cycle', topic: 'Linked List', url: 'https://leetcode.com/problems/linked-list-cycle/' },
  { name: 'Invert Binary Tree', topic: 'Tree', url: 'https://leetcode.com/problems/invert-binary-tree/' },
  { name: 'Climbing Stairs', topic: 'DP', url: 'https://leetcode.com/problems/climbing-stairs/' },
  { name: 'Course Schedule', topic: 'Graph', url: 'https://leetcode.com/problems/course-schedule/' },
  { name: 'Word Search', topic: 'Backtracking', url: 'https://leetcode.com/problems/word-search/' },
];

const ProblemSensei = () => {
  const [selected, setSelected] = useState(null);

  const pickProblem = () => {
    const random = problems[Math.floor(Math.random() * problems.length)];
    setSelected(random);
  };

  return (
    <div className="dsa-tool-panel">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--vermilion)' }}>
        <Target size={16} />
        <span className="tool-title">Problem Sensei / 先生</span>
      </div>
      
      {!selected ? (
        <div style={{ textAlign: 'center', padding: '1rem' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Undecided? Let the Sensei choose.</p>
          <button className="btn btn-primary" onClick={pickProblem} style={{ fontSize: '0.7rem' }}>Ask Sensei</button>
        </div>
      ) : (
        <div className="selected-problem">
          <span className="problem-tag">{selected.topic}</span>
          <h4>{selected.name}</h4>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a href={selected.url} target="_blank" rel="noopener noreferrer" className="btn" style={{ flex: 1, fontSize: '0.7rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              Solve <ExternalLink size={12} />
            </a>
            <button className="btn btn-secondary" onClick={pickProblem} style={{ padding: '0.5rem' }}>
              <Target size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemSensei;
