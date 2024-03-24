import React from 'react'
import styles from './copyButton.module.css'
import Image from 'next/image';

const CopyButton = ({addr}:{addr:string}) => {
  const handleClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(addr).then(() => {
        alert('Text copied to clipboard');
      }).catch(err => {
        alert('Failed to copy text to clipboard');
      });
    } else {
      alert('Could not copy! Clipboard API not available.');
    }
  };
  return (
    <div className={`${styles.copyButton}`} onClick={handleClick}>
      <Image style={{filter:'invert(100)'}} src={'/copy.png'} alt='copy' width={25} height={25}/>
    </div>
  )
}

export default CopyButton