import React from 'react'
import styles from './roadmap.module.css'
import RoadmapLine, { Checkpoint } from '@/components/roadmap-line/RoadmapLine'

const checkpoints:Checkpoint[] = [
 { link:"https://twitter.com/wisdomiacoin", roadmapCheckpoint: 'Create Twitter', isDone: true },
 { roadmapCheckpoint: 'Build Website', isDone: true },
 { link:"https://t.me/+5Nj99lQw3JVkOWNk", roadmapCheckpoint: 'Create Telegram', isDone: true },
 { link:"https://github.com/Wisdomia", roadmapCheckpoint: 'Open Source Github', isDone: true },
 { link:"", roadmapCheckpoint: 'Grow Community', isDone: false },
 { link:"", roadmapCheckpoint: 'Launch $WSDM Token', isDone: false },
 { link:"", roadmapCheckpoint: 'DEX Listing', isDone: false },
 { link:"", roadmapCheckpoint: 'Coingecko Listing', isDone: false },
 { link:"", roadmapCheckpoint: 'Birdeye Listing', isDone: false },
 { link:"", roadmapCheckpoint: 'Dex Screener Listing', isDone: false },
 { link:"", roadmapCheckpoint: 'Dex Tools Listing', isDone: false },
 { link:"https://rugcheck.xyz/", roadmapCheckpoint: 'High RugCheck Score', isDone:false},
 { link:"", roadmapCheckpoint: 'Jupiter Strict List', isDone: false },
 { link:"", roadmapCheckpoint: 'Bubblemaps Listing', isDone: false },
 { link:"", roadmapCheckpoint: 'CoinMarketCap Listing', isDone: false },
 { link:"", roadmapCheckpoint: 'Launch Discord', isDone: false },
 { link:"https://app.wisdomia.vip/", roadmapCheckpoint: 'Wisdomia Platform', isDone: false },
 { link:"", roadmapCheckpoint: 'CEX Listing (MEXC)', isDone: false },
 { link:"", roadmapCheckpoint: 'Udemy Course - Wisdomia', isDone: false },
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