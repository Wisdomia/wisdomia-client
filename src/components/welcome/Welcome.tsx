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
      <CustomButton enabled={true} text='Launch App' link='https://app.wisdomia.vip'/>
    </div>
    
  )
}

export default Welcome