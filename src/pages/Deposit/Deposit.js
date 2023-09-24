import React from "react";
import DepositCrypto from "../../components/Deposit/DepositCrypto/DepositCrypto";
import DepositHistory from "../../components/Deposit/DepositHistory/DepositHistory";
import styles from "./Deposit.module.css";
const Deposit = () => {
  return (
    <div className={["mainWrapper", styles.wrapper].join(" ")}>
      <DepositCrypto />
      <DepositHistory />
    </div>
  );
};

export default Deposit;
