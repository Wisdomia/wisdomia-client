import React from 'react'
import styles from './benefits.module.css'
import Box from '@/components/box/Box'
import Image from 'next/image'

const Benefits = () => {
  return (
    <section className={`${styles.benefits}`}>
        <div className={`${styles.left}`}>
            <Box title={"Benefits"} text={"$WSDM is a crypto utility token which provides access to the best in-class motivational wisdoms and quotes from the world elite performers!"} />
        </div>
        <div className={`${styles.right}`}>
            <Image style={{filter:'invert(100%)'}} src={'/benefits.png'} width={400} height={400} alt='benefits'/>
        </div>
    </section>
  )
}

export default Benefits