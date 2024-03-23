import React from 'react'
import styles from './roadmap.module.css'
import RoadmapLine from '@/components/roadmap-line/RoadmapLine'

const checkpoints = [
 { roadmapCheckpoint: 'Create Telegram', isDone: true },
 { roadmapCheckpoint: 'Create Twitter', isDone: true },
 { roadmapCheckpoint: 'Build Website', isDone: false },
 { roadmapCheckpoint: 'Launch $WSDM Token', isDone: false },
 { roadmapCheckpoint: 'Add Liquidity', isDone: false },
 { roadmapCheckpoint: 'CEX Listing', isDone: false },
 { roadmapCheckpoint: 'Open Source Github', isDone: false },
 { roadmapCheckpoint: 'Wisdomia Platform', isDone: false }
]

const Roadmap = () => {
  return (
    <div className={styles.roadmap}>
      <h1>Roadmap</h1>
      <RoadmapLine checkpoints={checkpoints} />
    </div>
  )
}

export default Roadmap