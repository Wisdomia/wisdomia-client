import React from 'react'
import styles from './tokenomicsBox.module.css'
import { ITokenomicBoxProps } from '@/types'

const TokenDetail = ({detail}:{detail:ITokenomicBoxProps})=>{
  return (
    <div className={styles.tokenDetails}>
      <span>{detail.name}</span>
      <span>{detail.allocation}%</span>
    </div>
  )
}

const TokenomicsBox = ({ data }: { data: ITokenomicBoxProps[] }) => {
  return (
    <div className={styles.tokenomicsBox}>
      <span className={styles.title}>Tokenomics</span>
      <ul className={styles.dataList}>
        {data.map((item, index) => (
          <li key={index}>
            <TokenDetail detail={item}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TokenomicsBox