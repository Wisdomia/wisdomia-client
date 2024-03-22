import React from 'react'
import styles from './tokenomics.module.css'
import Box from '@/components/box/Box'
import TokenomicsBox from '@/components/tokenomics-box/TokenomicsBox'
import { ITokenomicBoxProps } from '@/types'

const allocationData:ITokenomicBoxProps[] = [{
  name:"Liquidity",
  allocation:81
},{
  name:"Team",
  allocation:5,
},{
  name:"Marketing",
  allocation:4,
},{
  name: "CEX Listing",
  allocation:10,
}
]

const Tokenomics = () => {
  return (
    <div className={`${styles.tokenomics}`}>
      <div className={`${styles.left}`}>
        Distribution Chart
      </div>
      <div className={`${styles.right}`}>
        <TokenomicsBox data={allocationData} />
      </div>
    </div>
  )
}

export default Tokenomics