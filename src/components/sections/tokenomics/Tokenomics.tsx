import React from 'react'
import styles from './tokenomics.module.css'
import TokenomicsBox from '@/components/tokenomics-box/TokenomicsBox'
import { ITokenomicBoxProps } from '@/types'

const allocationData:ITokenomicBoxProps[] = [{
  name:"Liquidity",
  allocation:77
},{
  name:"Team",
  allocation:5,
},{
  name:"Marketing",
  allocation:4,
},{
  name: "Listings",
  allocation:14,
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