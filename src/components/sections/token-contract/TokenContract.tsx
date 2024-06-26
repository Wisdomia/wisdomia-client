'use client'
import React, { useEffect, useState } from 'react'
import styles from './tokenContract.module.css'
import CustomButton from '@/components/custom-buttom/CustomButton'
import CopyButton from '@/components/copy-button/CopyButton'
import Image from 'next/image'

const TokenInfo = ({ title, data, isAddress = false,fullAddress }: { title: string, data: string,isAddress?:boolean,fullAddress?:string }) => {
    return (
        <div className={styles.tokenInfo}>
            <span className={styles.tiTtile}>
                {title}:
            </span>
            <div className={styles.addrAndCopy}>
            <span className={styles.tiData}>{data}</span>
            {/* {isAddress && <CopyButton addr={fullAddress?fullAddress:data}/>} */}
            </div>
        </div>
    )
}

const TokenContract = () => {
    const fullAddress = 'Comming soon!';
    const [displayedAddress, setDisplayedAddress] = useState(fullAddress);

    // useEffect(() => {
    //     const handleResize = () => {
    //         const newWidth = window.innerWidth;
    //         if (newWidth <= 450) {
    //             const shortened = `${fullAddress.substring(0, 5)}...${fullAddress.substring(fullAddress.length - 3)}`;
    //             setDisplayedAddress(shortened);
    //         } else {
    //             setDisplayedAddress(fullAddress);
    //         }
    //     };

    //     handleResize();

    //     window.addEventListener('resize', handleResize);

    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);

    return (
        <div className={styles.tokenContract}>
            <h1>Token Contract</h1>
            <span>Use the contract information below to add the $WSDM token to your wallet.</span>
            <div className={styles.tokenInfos}>
                <div className={styles.tokenInfosBasics}>
                {/* <Image
                style={{
                    cursor:'pointer'
                }}
                 onClick={()=>{
                    window.open('https://nibiru.fi/',"_blank")
                }} src={'/nibi.png'} width={100} height={100} alt='nibiru' /> */}
                <TokenInfo title='Network' data='Solana' />
                <TokenInfo title='Token Symbol' data='WSDM' />
                <TokenInfo title='Decimal' data='9' />
                </div>
                <div className={styles.addressHolder}>
                <TokenInfo title='Address' data={displayedAddress} isAddress={true} fullAddress={fullAddress}/>
                </div>
            </div>
            <h2>Do not directly send any tokens to this address, as it could lead to the irreversible loss of your funds.</h2>
        </div>
    )
}

export default TokenContract