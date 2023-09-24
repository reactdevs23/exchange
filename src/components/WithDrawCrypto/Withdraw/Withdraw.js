import { useState } from "react";
import clsx from "clsx";
import Button from "../../Button/Button";
import Dropdown from "../../Dropdown/Dropdown";
import { arrowRight, tether } from "../../../images/images";
import classes from "./Withdraw.module.css";
import Address from "../AddressAndCubeUser/Address";
import CubeUser from "../AddressAndCubeUser/CubeUser";

const Withdraw = ({ selectedNetwork, setSelectedNetwork }) => {
  const [selectedOption, setSelectedOption] = useState("address");
  const info = [
    { key: "USDT balance", value: "0.2394693 USDT" },
    { key: "Network fee", value: "0.29 ~ 2.79 USDT" },
    { key: "Minimum withdrawal", value: "2 USDT" },
    {
      key: "24h remaining limit",
      value: "8,000,000.00 USDT/8,000,000.00 USDT",
    },
  ];

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.wrapper}>
        <h4 className={classes.withDrawTitle}>Withdraw Crypto</h4>
        <Button primary rounded>
          Deposit Fiat <img src={arrowRight} alt="arrow" />
        </Button>
      </div>

      <div className={classes.withdrawFrom}>
        <div className={clsx(classes.item)}>
          <div className={classes.label}>
            <h4 className={classes.bold}>Select Coin</h4>
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
        <div className={[classes.item, classes.sendTo].join(" ")}>
          <div className={classes.label}>
            <h4 className={classes.bold}>Send to</h4>
          </div>
          <div className={classes.inputContainer}>
            <div className={classes.optionWrapper}>
              <div className={classes.options}>
                <button
                  className={clsx(
                    selectedOption === "address" && classes.active
                  )}
                  onClick={() => setSelectedOption("address")}
                >
                  Address
                </button>
                <button
                  className={clsx(
                    selectedOption === "cubeuser" && classes.active
                  )}
                  onClick={() => setSelectedOption("cubeuser")}
                >
                  Cube User
                </button>
              </div>

              {selectedOption.toLowerCase() === "address" && (
                <Address
                  selectedNetwork={selectedNetwork}
                  setSelectedNetwork={setSelectedNetwork}
                />
              )}
              {selectedOption.toLowerCase() === "cubeuser" && <CubeUser />}
            </div>

            <div className={classes.infoWrapper}>
              {info.map((el, i) => (
                <div className={classes.keyValue} key={i}>
                  <div className={classes.text}>{el.key}</div>
                  <div className={classes.text}>{el.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
