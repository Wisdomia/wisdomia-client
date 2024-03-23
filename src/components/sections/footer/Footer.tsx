import React from 'react'
import styles from './footer.module.css'
import { IFooterLinkData } from '@/types'

const footerLinkData:IFooterLinkData[] = [
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1>Wisdomia</h1>
      <span>2024© Wisdomia LLC | All Rights Reserver</span>
      
    </footer>
  )
}

export default Footer