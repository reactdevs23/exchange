import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { cake, eth, ada, sol, dot, link } from "../../../images/imags";
import styles from "./ChooseCurrency.module.css";

const ChooseCurrency = ({
  modal,
  setModal,
  selectedCurrency,
  setSelectedCurrency,
}) => {
  const [coin, setCoin] = useState("");

  const currencies = [
    {
      icon: cake,
      name: "cake",
      fullName: "Pancakeswap",
      amount: "0.7049986",
      usdAmount: "$1,125.27",
    },

    {
      icon: eth,
      name: "Eth",
      fullName: "Ethereum",
      amount: "0.7049986",
      usdAmount: "$1,125.27",
    },
    {
      icon: ada,
      name: "Ada",
      fullName: "Cardano",
      amount: "0.7049986",
      usdAmount: "$1,125.27",
    },
    {
      icon: sol,
      name: "Solana",
      fullName: "Solana",
      amount: "0.7049986",
      usdAmount: "$1,125.27",
    },
    {
      icon: dot,
      name: "Dot",
      fullName: "Polkadot",
      amount: "0.7049986",
      usdAmount: "$1,125.27",
    },
    {
      icon: link,
      name: "Link",
      fullName: "Chainlink",
      amount: "0.7049986",
      usdAmount: "$1,125.27",
    },
  ];
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h4 className={styles.heading}>
              Choose Currency{" "}
              <MdClose
                className={styles.close}
                onClick={() => {
                  setModal(false);
                }}
              />
            </h4>
            <div className={styles.inputContainer}>
              <FiSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search Coin"
                value={coin}
                onChange={(e) => setCoin(e.target.value)}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.currencyWrapper}>
            {" "}
            {currencies.map((el, i) => (
              <div
                className={[styles.currencyContainer]}
                key={i}
                onClick={() => {
                  setSelectedCurrency(el);
                  setModal(false);
                }}
              >
                <div className={styles.iconAndDetails}>
                  <img src={el.icon} alt="#" className={styles.icon} />
                  <div className={styles.details}>
                    <p className={styles.name}>{el.name} </p>
                    <p className={styles.fullName}>{el.fullName}</p>
                  </div>
                </div>
                <div className={styles.details}>
                  <p className={styles.amount}>{el.amount}</p>
                  <p className={styles.usdAmount}>fee {el.usdAmount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
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

export default ChooseCurrency;
