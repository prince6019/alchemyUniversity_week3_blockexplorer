import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Alchemy, Network } from "alchemy-sdk";

// -------internal import
import styles from "@/styles/Home.module.css";
import {
  BlockDetails,
  HomeContainer,
  Wallet,
} from "@/components/ComponentIndex";

const inter = Inter({ subsets: ["latin"] });
const settings = {
  apiKey: process.env.NEXT_PUBLIC_GOERLI_API_KEY,
  network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);

export default function Home() {
  // const [listOfBlock, setListOfBlock] = useState([]);
  // console.log("length of listofblock :", listOfBlock.length);
  // useEffect(() => {
  //   async function getBlock() {
  //     let number = await alchemy.core.getBlockNumber();
  //     const arr = [];
  //     for (let i = 0; i < 10; i++) {
  //       try {
  //         const block = await alchemy.core.getBlockWithTransactions(number);
  //         arr.push(block);
  //         number--;
  //       } catch (e) {
  //         console.log("ethereum error is : ", e);
  //       }
  //     }
  //     console.log(arr);
  //     setListOfBlock(arr);
  //   }
  //   getBlock();
  // }, []);

  const [showBlock, setShowBlock] = useState(false);
  const [blockNumber, setBlockNumber] = useState(0);

  return (
    <div className={styles.home}>
      <div className={styles.home_container}>
        <div className={styles.home_container_box1}>
          <HomeContainer
            setShowBlock={setShowBlock}
            setBlockNumber={setBlockNumber}
            alchemy={alchemy}
          />
          <Wallet />
        </div>
        {showBlock && (
          <BlockDetails blockNumber={blockNumber} alchemy={alchemy} />
        )}
      </div>
    </div>
  );
}
