import clsx from "clsx";
import { useState } from "react";

import Button from "../../Button/Button";
import { address, arrowRight, copy, tether } from "../../../images/images";
import Dropdown from "../../Dropdown/Dropdown";

import classes from "./DepositCrypto.module.css";

const DepositCrypto = () => {
  const [step, setStep] = useState(1);

  return (
    <div className={classes.mainWrapper}>
      <div className={classes.buttonContainer}>
        <h4 className={classes.title}>Deposit Crypto</h4>{" "}
        <Button primary rounded>
          Deposit Fiat <img src={arrowRight} alt="arrow" />
        </Button>
      </div>

      <div className={classes.wrapper}>
        <div className={clsx(classes.stepItem, step >= 1 && classes.active)}>
          <div className={classes.labelContainer}>
            <div className={classes.number}>
              1 <div className={classes.dottedLine}></div>
            </div>
            <div className={classes.label}>Select Coin</div>
          </div>
          <div className={classes.inputsContainer}>
            {step >= 1 && (
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
                onSelect={(val) => {
                  setStep(2);
                }}
              />
            )}
          </div>
        </div>
        <div className={clsx(classes.stepItem, step >= 2 && classes.active)}>
          <div className={classes.labelContainer}>
            <div className={classes.number}>2</div>
            <div className={classes.label}>Select Network </div>
          </div>
          <div className={classes.inputsContainer}>
            {step >= 2 && (
              <Dropdown
                uniqueKey="select-network"
                placeholder="Choose Network"
                options={[
                  {
                    title: "TRX",
                    subTitle: "Tron (TRC20)",
                  },
                  {
                    title: "BSC",
                    subTitle: "BNB Smart Chain (BEP20)",
                  },
                  {
                    title: "ETH",
                    subTitle: "Ethereum (ERC20)",
                  },
                  {
                    title: "Matic",
                    subTitle: "Polygon",
                  },
                ]}
                onSelect={(val) => {
                  setStep(3);
                }}
              />
            )}
          </div>
        </div>
        <div className={clsx(classes.stepItem, step >= 3 && classes.active)}>
          <div className={classes.labelContainer}>
            <div className={classes.number}>3</div>
            <div className={classes.label}>Deposit Network </div>
          </div>
          <div
            className={[classes.inputsContainer, classes.addressWrapper].join(
              " "
            )}
          >
            {step >= 3 && (
              <div className={classes.addressContainer}>
                <div className={classes.addressWrapper}>
                  <img src={address} alt="address" />
                  <div className={classes.addressCopyContainer}>
                    <div>
                      <p className={classes.text}>Address</p>
                      <small className={classes.address}>
                        TUWcFx93oZaLMDEWRqwSfdPBzGT6qCgzpt
                      </small>
                    </div>
                    <div className={classes.copy}>
                      <img
                        src={copy}
                        alt="copy"
                        onClick={() => {
                          window.navigator.clipboard.writeText(
                            "TUWcFx93oZaLMDEWRqwSfdPBzGT6qCgzpt"
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className={classes.details}>
                  <div className={classes.spaceBetween}>
                    <div className={classes.text}>Minimum Deposit</div>
                    <div className={classes.text}>More than 0.01 USDT</div>
                  </div>
                  <div className={classes.spaceBetween}>
                    <div className={classes.text}>Deposit Confirmation</div>
                    <div className={classes.text}>12 Block(s)</div>
                  </div>
                  <div className={classes.spaceBetween}>
                    <div className={classes.text}>Withdrawal Confirmation</div>
                    <div className={classes.text}>64 Block(s)</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositCrypto;
