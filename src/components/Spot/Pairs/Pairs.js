import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { PiCaretUpDownFill } from "react-icons/pi";
import { BsStarFill } from "react-icons/bs";
import styles from "./Pairs.module.css";
import "./Pairs.css";
import Currencies from "./Currencies/Currencies";

const Pairs = () => {
  const [searchValue, setSearchValue] = useState("");
  const data = [
    { pairs: "ARPA", price: "0.0000019", change: "+2.87%" },
    {
      pairs: "AST",
      price: "<span class='red'>0.0000353</span>",
      change: "+4.14%",
    },
    { pairs: "ASTR", price: "0.00000319", change: "+2.69%" },
    {
      pairs: "AST",
      price: "<span class='green'>0.0000353</span>",
      change: "+2.87%",
    },
    {
      pairs: "AST",
      price: "<span class='red'>0.0000353</span>",
      change: "+4.14%",
    },
    {
      pairs: "ASTR",
      price: "0.00000319",
      change: "<span class='red'>-0.31%</span>",
    },
    { pairs: "ASTR", price: "0.00000319", change: "+2.69%" },
    {
      pairs: "ASTR",
      price: "<span class='green'>0.0000353</span>",
      change: "+2.87%",
    },
    { pairs: "AST", price: "0.0000019", change: "+2.87%" },
    {
      pairs: "AST",
      price: "<span class='red'>0.0000353</span>",
      change: "+4.14%",
    },
    { pairs: "ASTR", price: "0.00000319", change: "+2.69%" },

    {
      pairs: "AST",
      price: "<span class='red'>0.0000353</span>",
      change: "+4.14%",
    },
    {
      pairs: "ASTR",
      price: "0.00000319",
      change: "<span class='red'>-0.31%</span>",
    },
    { pairs: "ASTR", price: "0.00000319", change: "+2.69%" },
    {
      pairs: "ARPA",
      price: "<span class='green'>0.0000353</span>",
      change: "+2.87%",
    },
  ];
  const filteredData = searchValue
    ? data.filter((item) => item.pairs.toLowerCase().includes(searchValue))
    : data;
  console.log(searchValue);
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <FiSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={styles.input}
        />
      </div>
      <Currencies />
      <div>
        <div className={styles.header}>
          <p className={[styles.text, styles.heading].join(" ")}>
            Pair <PiCaretUpDownFill className={styles.upDown} />
          </p>{" "}
          <p
            className={[styles.text, styles.heading, styles.textRight].join(
              " "
            )}
          >
            Price
            <PiCaretUpDownFill className={styles.upDown} />
          </p>{" "}
          <p
            className={[styles.text, styles.heading, styles.textRight].join(
              " "
            )}
          >
            Change <PiCaretUpDownFill className={styles.upDown} />
          </p>
        </div>
        <div className={styles.valueContainer}>
          {filteredData.map((el, i) => (
            <div className={styles.valueWrapper} key={i}>
              <p className={styles.text}>
                <BsStarFill className={styles.star} />
                <span className={styles.text}>{el.pairs}</span>
                <span className={[styles.text, styles.pairWith].join(" ")}>
                  /BTC
                </span>
              </p>{" "}
              <p
                className={[styles.text, styles.price, styles.textRight].join(
                  " "
                )}
                dangerouslySetInnerHTML={{ __html: el.price }}
              ></p>
              <p
                className={[styles.text, styles.textRight, styles.green].join(
                  " "
                )}
                dangerouslySetInnerHTML={{ __html: el.change }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pairs;
