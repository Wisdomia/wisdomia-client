import React from 'react'
import styles from './about.module.css'
import Box from '@/components/box/Box'
import Image from 'next/image'

const About = () => {
  return (
    <section className={`${styles.about}`}>
        <div className={`${styles.left}`}>
            <Box title={"About"} text={"$WSDM is a crypto utility token which provides access to the best in-class motivational wisdoms and quotes from the world elite performers!"} />
        </div>
        <div className={`${styles.right}`}>
        <Image src={'/increase.png'} layout='fill' objectFit='contain' alt='rising'/>
        </div>
    </section>
  )
}

export default About