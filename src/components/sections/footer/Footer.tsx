'use client'

import React from 'react'
import styles from './footer.module.css'
import { IFooterLinkData } from '@/types'
import { useScroll } from '@/app/context'
import TextButton from '@/components/text-button/TextButton'
import Image from 'next/image'
import CustomButton from '@/components/custom-buttom/CustomButton'

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
      <span>2024© Wisdomia</span>
      <span style={{marginTop:'0.3rem'}}>All Rights Reserver</span>
      <div className={styles.footerBuyButtonHolder}>
        <CustomButton text='Buy Now' link=''/>
      </div>
      <section className={styles.textButtons}>
        <TextButton scrollFn={scrollToRef} refElement={welcomeRef} text='Launch App' useAsLink={true} link={"https://app.wisdomia.vip"}/>
        <TextButton scrollFn={scrollToRef} refElement={aboutRef} text='About'/>
        <TextButton scrollFn={scrollToRef} refElement={tokenomicsRef} text='Tokenomics'/>
        <TextButton scrollFn={scrollToRef} refElement={benefitsRef} text='Benefits'/>
        <TextButton scrollFn={scrollToRef} refElement={roadmapRef} text='Roadmap'/>
        <TextButton scrollFn={scrollToRef} useAsLink={true} link='https://www.linkedin.com/in/nikola-bozin/' text='Developer'/>
      </section>
      <section className={styles.socials}>
        <Image style={{filter:'invert(100)'}} onClick={()=>{handleClick("https://github.com/Wisdomia")}} className={styles.socialImage} src={'/github.png'} width={32} height={32} alt='telegram'/>
        <Image onClick={()=>{handleClick("https://twitter.com/wisdomiacoin")}} className={styles.socialImage} src={'/twitter.png'} width={40} height={40} alt='twitter'/>
        <Image onClick={()=>{handleClick("https://t.me/wisdomia_public")}} className={styles.socialImage} src={'/telegram.png'} width={30} height={30} alt='telegram'/>
      </section>
    </footer>
  )
}

export default Footer