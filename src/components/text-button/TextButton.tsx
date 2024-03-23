'use client'
import React from 'react'
import styles from './textButton.module.css'

const TextButton = ({text,refElement,scrollFn}:{text:string,refElement:any,scrollFn:any}) => {
  const handleClick = () => scrollFn(refElement);

  console.info(refElement)
  return (
    <div 
    onClick={handleClick}
    className={styles.textButton}>
        {text}
    </div>
  )
}


export default TextButton