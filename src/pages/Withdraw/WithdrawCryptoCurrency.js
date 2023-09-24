import { useState } from "react";
import clsx from "clsx";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";
import { arrowRight, tether } from "../../images/images";
import Address from "../../components/WithDrawCrypto/AddressAndCubeUser/Address";
import CubeUser from "../../components/WithDrawCrypto/AddressAndCubeUser/CubeUser";
import classes from "./WithdrawCryptoCurrency.module.css";
import Withdraw from "../../components/WithDrawCrypto/Withdraw/Withdraw";
import WithdrawCryptoSuccess from "../../components/WithDrawCrypto/WithdrawCryptoSuccess/WithdrawCryptoSuccess";
import WithDrawHistory from "../../components/WithDrawCrypto/WithDrawHistory/WithDrawHistory";

const WithdrawCryptoCurrency = () => {
  const [selectedOption, setSelectedOption] = useState("address");
  const [selectedNetwork, setSelectedNetwork] = useState("");

  return (
    <div className={[classes.mainWrapper, "mainWrapper"].join(" ")}>
      {selectedNetwork ? (
        <WithdrawCryptoSuccess />
      ) : (
        <div className={classes.wrapper}>
          <Withdraw
            selectedNetwork={selectedNetwork}
            setSelectedNetwork={setSelectedNetwork}
          />
          <WithDrawHistory />
        </div>
      )}
    </div>
  );
};

export default WithdrawCryptoCurrency;
{
  /* <div className={classes.wrapper}>
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
              <div className={classes.keyValue}>
                <div className={classes.text}>USDT balance</div>
                <div className={classes.text}>0.2394693 USDT</div>
              </div>
              <div className={classes.keyValue}>
                <div className={classes.text}>Network fee</div>
                <div className={classes.text}>0.29 ~ 2.79 USDT</div>
              </div>
              <div className={classes.keyValue}>
                <div className={classes.text}>Minimum withdrawal</div>
                <div className={classes.text}>2 USDT</div>
              </div>
              <div className={classes.keyValue}>
                <div className={classes.text}>24h remaining limit</div>
                <div className={classes.text}>
                  8,000,000.00 USDT/8,000,000.00 USDT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
