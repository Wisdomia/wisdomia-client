'use client'
import React from 'react'
import styles from './textButton.module.css'

const TextButton = ({text,refElement,scrollFn,useAsLink,link}:{text:string,refElement:any,scrollFn:any,useAsLink?:boolean,link?:string}) => {
  const handleClick = () =>{
    if(useAsLink){
      window.open(link,'_blank')
      return;
    }
    scrollFn(refElement);
  } 

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