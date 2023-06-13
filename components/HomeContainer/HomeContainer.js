import React, { useEffect, useState } from "react";
// import { Alchemy, Network } from "alchemy-sdk";

// -------internal import
import styles from "./HomeContainer.module.css";

// const settings = {
//   apiKey: process.env.NEXT_PUBLIC_GOERLI_API_KEY,
//   network: Network.ETH_GOERLI,
// };

// const alchemy = new Alchemy(settings);

const HomeContainer = ({ setShowBlock, setBlockNumber, alchemy }) => {
  const [blockNumberList, setBlockNumberList] = useState([]);
  const [latestBlockNumber, setLatestBlockNumber] = useState(0);
  useEffect(() => {
    async function getLatestBlock() {
      let latestBlock;
      try {
        latestBlock = await alchemy.core.getBlockNumber();
        setLatestBlockNumber(latestBlock);
      } catch (e) {
        console.log(e);
      }
      const arr = [];
      for (let i = 0; i < 10; i++) {
        arr.push(latestBlock - i);
      }
      setBlockNumberList(arr);
    }
    getLatestBlock();
  }, []);

  async function handleClick(i) {
    setShowBlock(true);
    console.log(i);
    setBlockNumber(i);
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContainer_container}>
        <div className={styles.homeContainer_block_box}>
          <h2>Latest Blocks</h2>
          {blockNumberList.map((ele, i) => {
            return (
              <div
                onClick={() => handleClick(ele)}
                className={styles.homeContainer_block}
                key={i}
              >
                {ele}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
