import { useState } from "react";
import clsx from "clsx";

import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import { arrowRight, tether } from "../../images/images";
import classes from "./Pay.module.css";

const Withdraw = () => {
  const [selectedOption, setSelectedOption] = useState("Address");

  return (
    <div className="mt-46">
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="fw-bold fs-3">Withdraw Crypto</h4>
        <Button primary rounded>
          Deposit Fiat <img src={arrowRight} alt="arrow" />
        </Button>
      </div>

      <div className={classes.withdrawForm}>
        <div className={clsx(classes.item, "mb-46")}>
          <div className={classes.label}>
            <div className="fw-bold">Select Coin</div>
          </div>
          <div className={classes.inputContainer}>
            <Dropdown
              uniqueKey="select-coin"
              pattern1
              placeholder="Choose Coin"
              options={[
                {
                  img: tether,
                  title: "USDT",
                  subTitle: "Tether",
                },
                {
                  img: tether,
                  title: "USDT",
                  subTitle: "Tether",
                },
                {
                  img: tether,
                  title: "USDT",
                  subTitle: "Tether",
                },
              ]}
              onSelect={(val) => {}}
            />
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.label}>
            <div className="fw-bold">Send to</div>
          </div>
          <div className={classes.inputContainer}>
            <div className={classes.options}>
              <button
                className={clsx(selectedOption === "Address" && classes.active)}
                onClick={(e) => setSelectedOption(e.target.innerHTML)}
              >
                Address
              </button>
              <button
                className={clsx(
                  selectedOption === "Cube User" && classes.active
                )}
                onClick={(e) => setSelectedOption(e.target.innerHTML)}
              >
                Cube User
              </button>
            </div>

            <div className="fw-bold my-3">Address</div>
            <input type="text" placeholder="Enter Address" />
            <div className="fw-bold my-3">Network</div>
            <Dropdown
              uniqueKey="select-coin"
              pattern1
              placeholder="Select Withdrawal Network"
              options={[
                {
                  img: tether,
                  title: "USDT",
                  subTitle: "Tether",
                },
                {
                  img: tether,
                  title: "USDT",
                  subTitle: "Tether",
                },
                {
                  img: tether,
                  title: "USDT",
                  subTitle: "Tether",
                },
              ]}
              onSelect={(val) => {}}
            />

            <div className="mt-46">
              <div className="d-flex justify-content-between align-items-center py-2">
                <div className="text-light-1">USDT balance</div>
                <div className="text-light-1">0.2394693 USDT</div>
              </div>
              <div className="d-flex justify-content-between align-items-center py-2">
                <div className="text-light-1">Network fee</div>
                <div className="text-light-1">0.29 ~ 2.79 USDT</div>
              </div>
              <div className="d-flex justify-content-between align-items-center py-2">
                <div className="text-light-1">Minimum withdrawal</div>
                <div className="text-light-1">2 USDT</div>
              </div>
              <div className="d-flex justify-content-between align-items-center py-2">
                <div className="text-light-1">24h remaining limit</div>
                <div className="text-light-1">
                  8,000,000.00 USDT/8,000,000.00 USDT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
