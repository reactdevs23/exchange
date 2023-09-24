import React from "react";
import { MdClose } from "react-icons/md";
import styles from "./SelectNetwork.module.css";

const SelectNetworkModal = ({
  modal,
  setModal,
  selectedNetwork,
  setSelectedNetwork,
}) => {
  const networks = [
    {
      networkName: "TRX ",
      info: "Tron (TRC20)",
      arivalTime: "0 mins",
      fee: "1 USDT ( ≈ $1)",
    },
    {
      networkName: "BSC",
      info: "BNB Smart Chain (BEP20)",
      arivalTime: "0 mins",
      fee: "1 USDT ( ≈ $1)",
    },
    {
      networkName: "ETH ",
      info: "Ethereum (ERC20)",
      arivalTime: "0 mins",
      fee: "1 USDT ( ≈ $1)",
    },
    {
      networkName: "Matic ",
      info: "Polygon",
      arivalTime: "0 mins",
      fee: "1 USDT ( ≈ $1)",
    },
    {
      networkName: "EOS",
      info: "EOS",
      arivalTime: "0 mins",
      fee: "1 USDT ( ≈ $1)",
    },
  ];
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.wrapper}>
          <h4 className={styles.heading}>
            Select Network{" "}
            <MdClose
              className={styles.close}
              onClick={() => {
                setModal(false);
              }}
            />
          </h4>
          <div className={styles.networkWrapper}>
            {" "}
            {networks.map((el, i) => (
              <div
                className={styles.networkContainer}
                key={i}
                onClick={() => {
                  setSelectedNetwork(el);
                  setModal(false);
                }}
              >
                <div className={styles.box}>
                  <p className={styles.networkName}>{el.networkName} </p>
                  <p className={styles.info}>{el.info}</p>
                </div>
                <div className={styles.box}>
                  <p className={styles.arrivalTime}>
                    Arrival time ≈ {el.arivalTime}
                  </p>
                  <p className={styles.fee}>fee {el.fee}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {modal && (
        <div
          className={styles.overlay}
          onClick={() => {
            setModal(false);
          }}
        ></div>
      )}
    </>
  );
};

export default SelectNetworkModal;
