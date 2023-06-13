import React, { useEffect, useState } from "react";

// ---------internal import
import styles from "./BlockDetails.module.css";

const BlockDetails = ({ blockNumber, alchemy }) => {
  const [blockDetail, setBlockDetail] = useState({});
  useEffect(() => {
    async function getblockTransaction() {
      try {
        const tx = await alchemy.core.getBlockWithTransactions(blockNumber);
        setBlockDetail(tx);
        console.log(blockDetail);
      } catch (e) {
        console.log(e);
      }
    }
    getblockTransaction();
  }, [blockNumber]);

  return (
    <div className={styles.blockdetail}>
      <div className={styles.blockdetail_container}>
        <div className={styles.blockdetail_container_box}>
          <p>number : {blockDetail?.number}</p>
          <p>hash : {blockDetail?.hash}</p>
          <p>nonce : {blockDetail?.nonce}</p>
          <p>parenthash:{blockDetail?.parentHash}</p>
          <p>miner : {blockDetail?.miner}</p>
          <p>difficulty : {blockDetail?.difficulty}</p>
          <p>baseFeePerGas : {parseInt(blockDetail?.baseFeePerGas)}</p>
          <p>gasLimit : {parseInt(blockDetail?.gasLimit)}</p>
          <p>gasUsed : {parseInt(blockDetail?.gasUsed)}</p>
        </div>
      </div>
    </div>
  );
};

export default BlockDetails;
