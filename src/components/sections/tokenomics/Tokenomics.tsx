import React from 'react'
import styles from './tokenomics.module.css'
import TokenomicsBox from '@/components/tokenomics-box/TokenomicsBox'
import { ITokenomicBoxProps } from '@/types'
import CustomButton from '@/components/custom-buttom/CustomButton'

const allocationData:ITokenomicBoxProps[] = [{
  name:"Liquidity Pool",
  allocation:72
},{
  name: "Listings",
  allocation:13,
},
{
  name:"Team",
  allocation:4,
},{
  name:"Marketing",
  allocation:3,
},{
  name:"Community sale",
  allocation:5
}
]

const Tokenomics = ({ innerRef }:{innerRef:any}) => {
  return (
    <div ref={innerRef}  className={`${styles.tokenomics}`}>
        <TokenomicsBox data={allocationData} />
        <div className={styles.learnMore}>
        <p>Total Supply: 850.000.000</p>
        <CustomButton text='Learn more' link='tokenomics.wisdomia.vip'/>
        </div>
    </div>
  )
}

export default Tokenomics