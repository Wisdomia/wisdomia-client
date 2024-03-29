import React from 'react'
import styles from './roadmap.module.css'
import RoadmapLine from '@/components/roadmap-line/RoadmapLine'

const checkpoints = [
 { roadmapCheckpoint: 'Create Telegram', isDone: true },
 { roadmapCheckpoint: 'Create Twitter', isDone: true },
 { roadmapCheckpoint: 'Build Website', isDone: true },
 { roadmapCheckpoint: 'Launch $WSDM Token', isDone: false },
 { roadmapCheckpoint: 'Raydium LP', isDone: false },
 { roadmapCheckpoint: 'Coingecko Listing', isDone: false },
 { roadmapCheckpoint: 'FAQ & Support Desk', isDone: false },
 { roadmapCheckpoint: 'Dex Screener Listing', isDone: false },
 { roadmapCheckpoint: 'Dex Tools Listing', isDone: false },
 { roadmapCheckpoint: 'CoinMarketCap Listing', isDone: false },
 { roadmapCheckpoint: 'CEX Listing (MEXC)', isDone: false },
 { roadmapCheckpoint: 'Open Source Github', isDone: false },
 { roadmapCheckpoint: 'Launch Discord', isDone: false },
 { roadmapCheckpoint: 'Wisdomia Platform', isDone: false }
]

const Roadmap = ({ innerRef }:{innerRef:any}) => {
  return (
    <div ref={innerRef}  className={styles.roadmap}>
      <span>Roadmap</span>
      <RoadmapLine checkpoints={checkpoints} />
    </div>
  )
}

export default Roadmap