'use client'

import React from 'react'
import styles from './customButton.module.css'


const CustomButton = ({ text, link,enabled=false }: { text: string, link: string,enabled?:boolean }) => {
  const handleClick = () => {
    if(!enabled) return;
    window.open(link, '_blank');
  };

  return (
    <button style={{cursor:enabled?'':'not-allowed'}} className={`${styles.customButton}`} onClick={handleClick}>
      <strong>
        {text}
      </strong>
    </button>
  )
}

export default CustomButton