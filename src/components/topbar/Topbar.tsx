import React from 'react';
import styles from './topbar.module.css'; 

const TopBar: React.FC = () => {
  return (
    <header className={styles.topBar}>
      <div className={styles.logoContainer}>
        <img src="/path-to-your-logo.png" alt="Logo" className={styles.logo} />
        <span className={styles.companyName}>$WSDM</span>
      </div>
      <button>Buy Now</button>
    </header>
  );
};

export default TopBar;
