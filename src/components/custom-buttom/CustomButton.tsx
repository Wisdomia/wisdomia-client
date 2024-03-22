'use client'

import React from 'react'
import styles from './customButton.module.css'


const CustomButton = ({text,link}:{text:string,link:string}) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };
  
  return (
    <button className={`${styles.customButton}`} onClick={handleClick}><strong>{text}</strong></button>
  )
}

export default CustomButton