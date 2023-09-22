import React from "react";
import styles from "./WithDrawCrypto.module.css";
import SelectNetworkModal from "./SelectNetworkModal/SelectNetworkModal";

const WithDrawCrypto = () => {
  return (
    <div className={styles.wrapper}>
      <SelectNetworkModal />
    </div>
  );
};

export default WithDrawCrypto;
