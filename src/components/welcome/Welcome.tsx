import React from 'react'
import styles from './welcome.module.css'
import CustomButton from '../custom-buttom/CustomButton'

const Welcome = ({ innerRef }:{innerRef:any}) => {
  return (
    <div ref={innerRef} className={`${styles.welcome}`}>
      Welcome To <br />
      <span className={`${styles.wisdomia}`}>
        Wisdomia
      </span>
      <p>
        Your next step to success and <br/> strong mindset!
      </p>
      <div className={styles.xad} style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <CustomButton enabled={true} text='Launch App' link='https://app.wisdomia.vip'/>
  <CustomButton enabled={true} text='Farm Points' link='https://farm.wisdomia.vip'/>
</div>
    </div>
    
  )
}

export default Welcome