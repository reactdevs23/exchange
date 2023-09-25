import React, { useState } from "react";
import { btc } from "../../../../images/images";
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./CurrencyContainer.module.css";

const CurrencyContainer = ({ dropdownItems }) => {
  const [dropDown, setDropdown] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(dropdownItems[0]);
  const handleDropDown = () => {
    if (dropDown) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  return (
    <div className={styles.currencyContainer} onClick={handleDropDown}>
      <div className={styles.imgAndDetails}>
        <img src={selectedCurrency.icon} alt="#" className={styles.icon} />
        <div className={styles.details}>
          <p className={styles.currency}>{selectedCurrency.currency}</p>{" "}
          <p className={styles.fullName}>{selectedCurrency.fullName}</p>
        </div>
        {dropDown ? (
          <BsCaretUpFill className={styles.arrow} />
        ) : (
          <BsCaretDownFill className={styles.arrow} />
        )}
      </div>
      <AnimatePresence>
        {dropDown && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className={styles.dropdownItems}
          >
            {dropdownItems?.map((el, idx) => {
              return (
                <div
                  className={styles.dropdownItem}
                  key={idx}
                  onClick={() => {
                    setDropdown(false);
                    setSelectedCurrency(el);
                  }}
                >
                  <div className={styles.imgAndDetails}>
                    <img src={el.icon} alt="#" className={styles.icon} />
                    <div className={styles.details}>
                      <p className={styles.currency}>{el.currency}</p>{" "}
                      <p className={styles.fullName}>{el.fullName}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CurrencyContainer;
