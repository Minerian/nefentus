import React, { useEffect } from "react";
import {
  useAddress,
  useBalance,
  useConnect,
  useConnectionStatus,
  useDisconnect,
} from "@thirdweb-dev/react";
import Button from "../../components/button/button";
import styles from "./walletIntegrations.module.css";
import { useTranslation } from "react-i18next";

const WalletIntegration = ({
  name,
  config,
  icon,
  connectStatus,
  setConnectStatus,
}) => {
  const wallet = {
    connect: useConnect(),
    disconnect: useDisconnect(),
    config: config,
    address: useAddress(),
    status: useConnectionStatus(),
    balance: useBalance(),
  };

  const { t } = useTranslation();

  useEffect(() => {
    if (
      (name === "Metamask" &&
        connectStatus["Wallet Connect"] === "connected") ||
      (name === "Wallet Connect" && connectStatus["Metamask"] === "connected")
    ) {
      wallet.disconnect();
    }
  }, [connectStatus, name]);

  useEffect(() => {
    if (wallet.status === "connected") {
      if (name === "Wallet Connect") {
        setConnectStatus({
          "Wallet Connect": "connected",
          Metamask: "disconnected",
        });
      } else if (name === "Metamask") {
        setConnectStatus({
          Metamask: "connected",
          "Wallet Connect": "disconnected",
        });
      }
    }
  }, [wallet.status, name, setConnectStatus]);

  return (
    <div className={styles.walletWrap}>
      <div className={styles.walletInfoWrap}>
        <div className={styles.walletLogoWrap}>
          <img src={icon} className={styles.walletLogo} alt={`${name}`} />
        </div>
        <div className={styles.walletTitle}>{name}</div>
        {wallet.address && (
          <div className={styles.walletAddressTitle}>
            Wallet address:{" "}
            <span className={styles.walletAddress}>
              {`${wallet.address.substring(0, 5)}...${wallet.address.substring(
                wallet.address.length - 5,
              )}`}
            </span>
          </div>
        )}
        {wallet.address && (
          <div className={styles.walletBalanceTitle}>
            Wallet balance:{" "}
            <span className={styles.walletBalance}>
              {wallet?.balance?.data?.displayValue.slice(0, 5)}{" "}
              {wallet?.balance?.data?.symbol}
            </span>
          </div>
        )}
      </div>
      <div className={styles.buttonWrap}>
        {wallet.status === "disconnected" && (
          <Button
            onClick={() => {
              wallet.connect(wallet.config, { chainId: 1 });
            }}
          >
            {t("integrations.connect")}
          </Button>
        )}
        {wallet.status === "unknown" && (
          <Button disabled>{t("integrations.connectError")}</Button>
        )}
        {wallet.status === "connecting" && (
          <Button disabled>{t("integrations.connecting")}</Button>
        )}
        {wallet.status === "connected" && (
          <Button color={"green"} onClick={() => wallet.disconnect()}>
            {t("integrations.disconnect")}
          </Button>
        )}
      </div>
    </div>
  );
};

export default WalletIntegration;