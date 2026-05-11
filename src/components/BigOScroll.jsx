import React, { useState } from 'react';
import { Book } from 'lucide-react';

const complexityData = [
  { name: 'Array Access', time: 'O(1)', space: 'O(1)' },
  { name: 'Binary Search', time: 'O(log n)', space: 'O(1)' },
  { name: 'QuickSort', time: 'O(n log n)', space: 'O(log n)' },
  { name: 'MergeSort', time: 'O(n log n)', space: 'O(n)' },
  { name: 'Hash Map (Avg)', time: 'O(1)', space: 'O(n)' },
  { name: 'BST Search', time: 'O(log n)', space: 'O(1)' },
  { name: 'Dijkstra', time: 'O(E log V)', space: 'O(V)' },
  { name: 'DFS/BFS', time: 'O(V + E)', space: 'O(V)' },
];

const BigOScroll = () => {
  return (
    <div className="dsa-tool-panel scroll-bg">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--vermilion)' }}>
        <Book size={16} />
        <span className="tool-title">Big-O Reference / 巻物</span>
      </div>
      <table className="big-o-table">
        <thead>
          <tr>
            <th>Algorithm</th>
            <th>Time</th>
            <th>Space</th>
          </tr>
        </thead>
        <tbody>
          {complexityData.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td><code>{item.time}</code></td>
              <td><code>{item.space}</code></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BigOScroll;
