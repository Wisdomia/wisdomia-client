import React from 'react';
import styles from './fillbar.module.css';

interface FillBarProps {
  value: number;
}

const FillBar: React.FC<FillBarProps> = ({ value }) => {
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <div className={styles.container}>
      <div className={styles.fill} style={{ width: `${clampedValue}%` }}></div>
    </div>
  );
};

export default FillBar;
