import React from 'react';
import { Layers } from 'lucide-react';

const designPatterns = [
  { concept: 'Load Balancing', description: 'Distributing traffic across multiple servers to ensure high availability and reliability.', ja: '負荷分散' },
  { concept: 'Caching (Redis/Memcached)', description: 'Storing frequently accessed data in memory to reduce latency and database load.', ja: 'キャッシュ' },
  { concept: 'Database Sharding', description: 'Horizontal partitioning of data across multiple database instances to improve scalability.', ja: 'シャーーディング' },
  { concept: 'Microservices', description: 'Architecting an application as a collection of small, independent services.', ja: 'マイクロサービス' },
  { concept: 'CAP Theorem', description: 'A distributed system can only provide two of three: Consistency, Availability, Partition Tolerance.', ja: 'CAP定理' },
  { concept: 'Message Queues (Kafka/RabbitMQ)', description: 'Asynchronous communication between services for decoupling and high throughput.', ja: 'メッセージキュー' },
  { concept: 'Consistent Hashing', description: 'A technique to minimize reorganization of data when servers are added or removed.', ja: '一貫性ハッシュ' },
];

const SystemDesignScroll = () => {
  return (
    <div className="dsa-tool-panel scroll-bg">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--vermilion)' }}>
        <Layers size={16} />
        <span className="tool-title">System Design / システム設計</span>
      </div>
      <div className="system-design-list">
        {designPatterns.map((item, i) => (
          <div key={i} className="design-item">
            <div className="design-header">
              <span className="design-ja">{item.ja}</span>
              <span className="design-concept">{item.concept}</span>
            </div>
            <p className="design-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemDesignScroll;
