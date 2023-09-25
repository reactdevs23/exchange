import React, { useState } from "react";
import clsx from "clsx";
import Slider from "react-input-slider";
import classes from "./styles.module.css";

const Sell = () => {
  const [state, setState] = useState({ x: 10, y: 10 });
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState("");
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
  return (
    <div className={classes.card}>
      {" "}
      <p className={classes.heading}>
        {" "}
        <span className={classes.subText}>Avbl </span> 0.25232634 USDT
      </p>
      <div className={clsx(classes.inner)}>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          onKeyDown={handleKeyDown}
          className={classes.input}
        />
        <p className={classes.value}>25252.1 USDT</p>
      </div>
      <div className={clsx(classes.inner)}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          onKeyDown={handleKeyDown}
          className={classes.input}
        />
        <p className={classes.value}>BTC</p>
      </div>
      <div className={classes.sliderContainer}>
        <div className={classes.sliderDots}>
          <div
            className={clsx(classes.sliderDot, state.x >= 0 && classes.active)}
          />
          <div
            className={clsx(classes.sliderDot, state.x >= 25 && classes.active)}
          />
          <div
            className={clsx(classes.sliderDot, state.x >= 50 && classes.active)}
          />
          <div
            className={clsx(classes.sliderDot, state.x >= 75 && classes.active)}
          />
          <div
            className={clsx(
              classes.sliderDot,
              state.x >= 100 && classes.active
            )}
          />
        </div>

        <Slider
          axis="x"
          x={state.x}
          onChange={({ x }) => setState((state) => ({ ...state, x }))}
          styles={{
            track: {
              backgroundColor: "transparent",
              width: "calc(100% - 24px)",
              margin: "0 auto",
              display: "block",
              zIndex: 1,
            },
            active: {
              backgroundColor: "#6C62E2",
            },
            thumb: {
              width: 30,
              height: 30,
              border: "8px solid #6C62E2",
            },
            disabled: {
              opacity: 0.5,
            },
          }}
        />
      </div>
      <div className={clsx(classes.inner)}>
        {/* <div className="text-light-1">Total</div> */}

        <input
          type="number"
          placeholder="Total"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          onKeyDown={handleKeyDown}
          className={classes.input}
        />
        <div className={classes.value}>USDT</div>
      </div>
      <div className={classes.subText}>Fee</div>
      <div className="">
        <button className={[classes.button, classes.btnRed].join(" ")}>
          Sell BTC
        </button>
      </div>
    </div>
  );
};

export default Sell;
