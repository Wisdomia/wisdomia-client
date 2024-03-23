'use client'

import React from 'react'
import styles from './footer.module.css'
import { IFooterLinkData } from '@/types'
import { useScroll } from '@/app/context'
import TextButton from '@/components/text-button/TextButton'
import Image from 'next/image'

const footerLinkData:IFooterLinkData[] = [
]

const Footer = () => {
  const handleClick = (link:string) => {
    window.open(link, '_blank');
  };

  const {
    welcomeRef,
    aboutRef,
    tokenomicsRef,
    benefitsRef,
    roadmapRef,
    scrollToRef,
  } = useScroll();

  return (
    <footer className={styles.footer}>
      <h1>Wisdomia</h1>
      <span>2024© Wisdomia LLC | All Rights Reserver</span>
      <section className={styles.textButtons}>
        <TextButton scrollFn={scrollToRef} refElement={welcomeRef} text='Buy Now'/>
        <TextButton scrollFn={scrollToRef} refElement={aboutRef} text='About'/>
        <TextButton scrollFn={scrollToRef} refElement={tokenomicsRef} text='Tokenomics'/>
        <TextButton scrollFn={scrollToRef} refElement={benefitsRef} text='Benefits'/>
        <TextButton scrollFn={scrollToRef} refElement={roadmapRef} text='Roadmap'/>
      </section>
      <section className={styles.socials}>
        <Image onClick={()=>{handleClick("https://google.com")}} className={styles.socialImage} src={'/telegram.png'} width={30} height={30} alt='telegram'/>
        <Image onClick={()=>{handleClick("https://google.com")}} className={styles.socialImage} src={'/twitter.png'} width={40} height={40} alt='twitter'/>
      </section>
    </footer>
  )
}

export default Footer