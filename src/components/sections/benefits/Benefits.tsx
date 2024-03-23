import React from 'react'
import styles from './benefits.module.css'
import Box from '@/components/box/Box'
import Image from 'next/image'

const Benefits = ({ innerRef }:{innerRef:any}) => {
  return (
    <section ref={innerRef}  className={`${styles.benefits}`}>
        <div className={`${styles.left}`}>
            <Box title={"Benefits"} text={"Elevate your spirit and rise to new heights! By Holding the $WSDM token, you gain a special access to all features on this platform."} />
        </div>
        <div className={`${styles.right}`}>
            <Image src={'/benefits.png'} width={400} height={400} alt='benefits'/>
        </div>
    </section>
  )
}

export default Benefits