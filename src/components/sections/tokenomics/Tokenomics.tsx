import React from 'react'
import styles from './tokenomics.module.css'
import TokenomicsBox from '@/components/tokenomics-box/TokenomicsBox'
import { ITokenomicBoxProps } from '@/types'

const allocationData:ITokenomicBoxProps[] = [{
  name:"Liquidity Pool",
  allocation:70
},
{
  name: "Development",
  allocation:15,
},
{
  name:"Community sale",
  allocation:10
},
{
  name:"Marketing",
  allocation:5,
}
]

const Tokenomics = ({ innerRef }:{innerRef:any}) => {
  return (
    <div ref={innerRef}  className={`${styles.tokenomics}`}>
        <TokenomicsBox data={allocationData} />
        <div className={styles.learnMore}>
        <p>Total Supply: 750.000.000</p>
        {/* <CustomButton text='Learn more' link='tokenomics.wisdomia.vip'/> */}
        </div>
    </div>
  )
}

export default Tokenomics