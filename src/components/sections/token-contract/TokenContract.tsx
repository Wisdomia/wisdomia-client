'use client'
import React, { useEffect, useState } from 'react'
import styles from './tokenContract.module.css'

const TokenInfo = ({ title, data }: { title: string, data: string }) => {
    return (
        <div className={styles.tokenInfo}>
            <span className={styles.tiTtile}>{title}:</span>
            <span className={styles.tiData}>{data}</span>
        </div>
    )
}

const TokenContract = () => {
    const fullAddress = '0x0000000000000000000000000000000000000000000';
    const [displayedAddress, setDisplayedAddress] = useState(fullAddress);

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            if (newWidth <= 450) {
                const shortened = `${fullAddress.substring(0, 5)}...${fullAddress.substring(fullAddress.length - 3)}`;
                setDisplayedAddress(shortened);
            } else {
                setDisplayedAddress(fullAddress);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.tokenContract}>
            <h1>Token Contract</h1>
            <span>Use the contract information below to add the $WSDM token to your wallet.</span>
            <div className={styles.tokenInfos}>
                <div className={styles.tokenInfosBasics}>
                <TokenInfo title='Network' data='Solana' />
                <TokenInfo title='Token Symbol' data='WSDM' />
                <TokenInfo title='Decimal' data='18' />
                </div>
                <TokenInfo title='Address' data={displayedAddress} />
            </div>
            <h2>It's important to avoid sending any tokens to this address, as it could lead to the irreversible loss of your tokens.</h2>
        </div>
    )
}

export default TokenContract