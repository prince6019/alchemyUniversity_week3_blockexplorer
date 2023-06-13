import React from "react";

// --------internal import
import styles from "./Wallet.module.css";

const Wallet = () => {
  return (
    <div className={styles.wallet}>
      <div className={styles.wallet_container}>
        <div className={styles.wallet_container_box}>
          <h1>Wallet Address : </h1>
          <p>Address</p>
          <h3>Balance : </h3>
          <p> 3 ETH</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
