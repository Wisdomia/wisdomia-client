import React from 'react';
import styles from './roadmapLine.module.css';
import Image from 'next/image';

interface Checkpoint {
  roadmapCheckpoint: string;
  isDone: boolean;
}

interface CheckpointCircleProps {
  isDone: boolean;
}

const CheckpointCircle: React.FC<CheckpointCircleProps> = ({ isDone }) => (
  <div className={`${styles.circle} ${isDone ? styles.filled : ''}`}></div>
);

interface RoadmapLineProps {
  checkpoints: Checkpoint[];
}

const RoadmapLine: React.FC<RoadmapLineProps> = ({ checkpoints }) => {
  const doneCount = checkpoints.filter(c => c.isDone).length;
  const fillHeight = (doneCount / checkpoints.length) * 100;

  return (
    <div className={styles.roadmapLine}>
      <div className={styles.fill} style={{ height: `${fillHeight}%` }}></div>
      {checkpoints.map((checkpoint, index) => (
        <div className={styles.checkpoint} style={{ top: `${(index / checkpoints.length) * 100}%` }} key={index}>
          <CheckpointCircle isDone={checkpoint.isDone} />
          <Image style={{ filter: checkpoint.isDone?"invert(100)":'', marginLeft: '20px' }} src={'/tick.png'} width={30} height={30} alt='tick' />
          <span>{checkpoint.roadmapCheckpoint}</span>
        </div>
      ))}
    </div>
  );
};

export default RoadmapLine;
