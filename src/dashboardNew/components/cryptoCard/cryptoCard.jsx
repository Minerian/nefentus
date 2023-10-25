import Button from "../button/button";
import Card from "../card/card";
import styles from "./cryptoCard.module.css";

import Ethereum from "../../../assets/icon/crypto/ethereum.svg";
import { useEffect, useState } from "react";
import useInternalWallet from "../../../hooks/internalWallet";
import {
  metamaskWallet,
  useAddress,
  useConnect,
  useConnectionStatus,
  useDisconnect,
} from "@thirdweb-dev/react";
import useBalances from "../../../hooks/balances";
import usePrices from "../../../hooks/prices";
import backendAPI from "../../../api/backendAPI";
import { currencies } from "../../../constants";
import { formatTokenBalance, formatUSDBalance } from "../../../utils";

const CryptoCard = ({ setTotal }) => {
  const [activeToggle, setActiveToggle] = useState(true);
  const metamask = {
    connect: useConnect(),
    disconnect: useDisconnect(),
    config: metamaskWallet(),
    address: useAddress(),
    status: useConnectionStatus(),
  };
  const backend_API = new backendAPI();
  const [cryptList, setCryptList] = useState([]);

  const { balances, fetchBalances } = useBalances(metamask);
  const { prices, fetchPrices } = usePrices(metamask);

  useEffect(() => {
    fetchPrices();
    fetchBalances();

    if (metamask.status === "connected" && metamask.address) {
      registerWallet();
    }

    async function registerWallet() {
      const result = await backend_API.registerWalletAddress(metamask.address);
    }
  }, [metamask.status, metamask.address]);

  function calculateTotalBalanceUSD() {
    let totalBalanceUSD = 0.0;

    for (let i = 0; i < currencies.length; i++) {
      let balanceUSD = 0.0;
      if (balances[1][i]) {
        const balanceToken = balances[1][i];
        if (prices[i]) {
          balanceUSD = balanceToken * prices[i];
        }
      }

      totalBalanceUSD += balanceUSD;
    }
    return totalBalanceUSD;
  }

  useEffect(() => {
    const data = balances[1].map((balance, index) => ({
      ...currencies[index],
      middleName: "Ethereum",
      middleInfo: "Network",
      price: prices[index],
      value: balance,
    }));

    setTotal(calculateTotalBalanceUSD());

    setCryptList(data);
  }, [prices, balances]);

  return (
    <Card>
      <div className={styles.top}>
        <div className={styles.label}>Crypto Market</div>

        <div className={styles.buttonWrapper}>
          <div className={styles.btn}>
            <p>Hide Zero Balance Assets</p>

            <div
              onClick={() => setActiveToggle((prev) => !prev)}
              className={`${activeToggle ? styles.activeToggle : ""} ${
                styles.toggle
              }`}
            >
              <div className={`${styles.toggleCircle}`}></div>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button color="light">Receive</Button>
            <Button>Send</Button>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        {cryptList.map((item, index) => (
          <CryptoItem key={index} data={item} />
        ))}
      </div>
    </Card>
  );
};

export default CryptoCard;

const CryptoItem = ({ data }) => {
  let balanceToken = "loading";
  let balanceUSD = "loading";
  if (data.value) {
    balanceToken = data.value;
    if (data.price) {
      balanceUSD = data.value * data.price;
    }
  }

  return (
    <div className={styles.cryptoItem}>
      <div className={styles.left}>
        <img src={data.icon} alt="" />

        <div>
          <div className={styles.title}>{data.name}</div>
          <div className={styles.subtitle}>{`${parseFloat(data.price).toFixed(
            2,
          )}`}</div>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.title}>{data.middleName}</div>
        <div className={styles.subtitle}>{data.middleInfo}</div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>${formatUSDBalance(balanceUSD)}</div>
        <div className={styles.subtitle}>
          {formatTokenBalance(balanceToken, data.decimals)} {data.abbr}
        </div>
      </div>
    </div>
  );
};
