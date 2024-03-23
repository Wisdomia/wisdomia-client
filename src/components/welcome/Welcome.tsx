import React from 'react'
import styles from './welcome.module.css'
import CustomButton from '../custom-buttom/CustomButton'

const Welcome = () => {
  return (
    <div className={`${styles.welcome}`}>
      Welcome To <br />
      <span className={`${styles.wisdomia}`}>
        Wisdomia
      </span>
      <p>
        Your next step to success and <br/> strong mindset!
      </p>
      <CustomButton text='Buy Now' link=''/>
    </div>
    
  )
}

export default Welcome