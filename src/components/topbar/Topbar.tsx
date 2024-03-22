import React from 'react';
import styles from './topbar.module.css'; 
import CustomButton from '../custom-buttom/CustomButton';

const TopBar: React.FC = () => {
  return (
    <header className={styles.topBar}>
      <div className={styles.logoContainer}>
        <img src="/path-to-your-logo.png" alt="Logo" className={styles.logo} />
        <span className={styles.companyName}>$WSDM</span>
      </div>
      <CustomButton text='Launch App' link=''/>
    </header>
  );
};

export default TopBar;
