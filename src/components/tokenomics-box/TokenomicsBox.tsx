import React from 'react'
import styles from './tokenomicsBox.module.css'
import { ITokenomicBoxProps } from '@/types'
import FillBar from '../fillbar/Fillbar'

const TokenDetail = ({detail}:{detail:ITokenomicBoxProps})=>{
  return (
    <div className={styles.tokenDetails}>
      <div className={styles.allocation}>
      <FillBar value={detail.allocation}/>
      <span>{detail.allocation}%</span>
      </div>
      <span>{detail.name}</span>
    </div>
  )
}

const TokenomicsBox = ({ data }: { data: ITokenomicBoxProps[] }) => {
  return (
    <div className={styles.tokenomicsBox}>
      <span className={styles.title}>Tokenomics</span>
      <ul className={styles.dataList}>
        {data.map((item, index) => (
          <>
          <li style={{padding:'1rem 0rem'}} key={index}>
            <TokenDetail detail={item}/>
          </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default TokenomicsBox