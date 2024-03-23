import React from 'react'
import styles from './box.module.css'

const Box = ({title,text}:{title:string,text:string}) => {
  return (
    <div className={`${styles.box}`}>
        <span  className={`${styles.title}`}>
            {title}
        </span>
        <h3 className={`${styles.text}`}>
            {text}
        </h3>
    </div>
  )
}

export default Box