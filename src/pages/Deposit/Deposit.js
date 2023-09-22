import React from "react";
import DepositCrypto from "../../components/Deposit/DepositCrypto/DepositCrypto";
import DepositHistory from "../../components/Deposit/DepositHistory/DepositHistory";

const Deposit = () => {
  return (
    <div className="mainWrapper" style={{ paddingTop: "50px" }}>
      <DepositCrypto />
      <DepositHistory />
    </div>
  );
};

export default Deposit;
