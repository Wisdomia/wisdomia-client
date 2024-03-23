import React from 'react'
import styles from './tokenomics.module.css'
import Box from '@/components/box/Box'
import TokenomicsBox from '@/components/tokenomics-box/TokenomicsBox'
import { ITokenomicBoxProps } from '@/types'
import FillBar from '@/components/fillbar/Fillbar'

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

const Tokenomics = ({ innerRef }:{innerRef:any}) => {
  return (
    <div ref={innerRef}  className={`${styles.tokenomics}`}>
        <TokenomicsBox data={allocationData} />
    </div>
  )
}

export default Tokenomics