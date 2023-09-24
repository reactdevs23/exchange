import React, { useState } from "react";
import { tether, userAvatar } from "../../images/images";
import Dropdown from "../Dropdown/Dropdown";
import classes from "./Pay.module.css";

const EnterAmount = ({ onPrev, onContinue }) => {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const handleKeyDown = (event) => {
    if (
      !(
        /[0-9]/.test(event.key) ||
        event.key === "Backspace" ||
        event.key === "ArrowUp" ||
        event.key === "ArrowDown"
      )
    ) {
      event.preventDefault();
    }
  };

  const increase = () => {
    setAmount((prev) => +prev + 1);
  };
  const decrease = () => {
    if (amount > 0) {
      setAmount((prev) => +prev - 1);
    }
  };
  return (
    <div className={classes.enterAmountWrap}>
      <div className={classes.profile}>
        <img src={userAvatar} alt="avatar" />
        <div className={classes.bold}>Alex Smith</div>
      </div>

      <div className={classes.dropdownContainer}>
        <h4 className={classes.dropDownTitle}>Currency</h4>

        <Dropdown
          pattern1
          placeholder="Choose currency"
          options={[
            {
              img: tether,
              title: "USDT",
            },
          ]}
          onSelect={(val) => {}}
        />
      </div>

      <div className={classes.marginTop}>
        <div className={classes.title}>Amount</div>

        <div className={classes.inputContainer}>
          <input
            className=""
            name="amount"
            type="number"
            onKeyDown={handleKeyDown}
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className={classes.usdt}>
            <svg
              width="19"
              height="27"
              viewBox="0 0 19 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 16L0 16L9.5 27L19 16Z"
                fill="#6C62E2"
                onClick={decrease}
              />
              <path
                d="M0 11L19 11L9.5 0L0 11Z"
                fill="#6C62E2"
                onClick={increase}
              />
            </svg>

            <p className={classes.text}>USDT</p>
          </div>
        </div>
      </div>

      <div className={classes.marginTop}>
        <div className={classes.title}>Note (Optional)</div>
        <div className={classes.inputContainer}>
          <input
            className=""
            type="text"
            name="note"
            value={note}
            onChange={(e) => setNote(e.target.text)}
            placeholder="Enter Note (Visible to the other party)"
          />
        </div>
      </div>

      <div className={classes.buttonContainer}>
        <button onClick={onPrev} className={classes.previous}>
          Previous Step
        </button>
        <button onClick={onContinue} className={classes.continue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default EnterAmount;
