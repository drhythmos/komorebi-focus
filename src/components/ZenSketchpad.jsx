import React, { useState } from 'react';
import { Edit3 } from 'lucide-react';

const ZenSketchpad = () => {
  const [text, setText] = useState('');

  return (
    <div className="dsa-tool-panel scroll-bg">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--vermilion)' }}>
        <Edit3 size={16} />
        <span className="tool-title">Zen Sketchpad / 下書き</span>
      </div>
      <textarea 
        className="zen-textarea"
        placeholder="Draft your logic here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <p style={{ marginTop: '0.5rem', fontSize: '0.6rem', color: 'var(--text-muted)', textAlign: 'right' }}>
        {text.length} characters of focus.
      </p>
    </div>
  );
};

export default ZenSketchpad;
