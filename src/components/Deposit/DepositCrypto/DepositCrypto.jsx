import clsx from "clsx";
import { useState } from "react";

import Button from "../../Button/Button";
import { address, arrowRight, copy, tether } from "../../../images/images";
import Dropdown from "../../Dropdown/Dropdown";

import classes from "./DepositCrypto.module.css";

const DepositCrypto = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="mb-80">
      <div className="d-flex flex-wrap gap-4 justify-content-between align-items-center">
        <h4 className="fw-bold fs-3">Deposit Crypto</h4>
        <Button primary rounded>
          Deposit Fiat <img src={arrowRight} alt="arrow" />
        </Button>
      </div>

      <div className="mt-5">
        <div
          className={clsx(
            classes.stepItem,
            step >= 1 && classes.active,
            "mb-80"
          )}
        >
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
        <div
          className={clsx(
            classes.stepItem,
            step >= 2 && classes.active,
            "mb-80"
          )}
        >
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
        <div
          className={clsx(
            classes.stepItem,
            step >= 3 && classes.active,
            "mb-80"
          )}
        >
          <div className={classes.labelContainer}>
            <div className={classes.number}>3</div>
            <div className={classes.label}>Deposit Network </div>
          </div>
          <div className={classes.inputsContainer}>
            {step >= 3 && (
              <div className={classes.addressContainer}>
                <div className="d-flex align-items-center gap-3">
                  <img src={address} alt="address" />
                  <div>
                    <div className="text-light-1">Address</div>
                    <small className="break-long mt-1 d-block">
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

                <div className={classes.details}>
                  <div className="my-2 d-flex justify-content-between">
                    <div className="text-light-1">Minimum Deposit</div>
                    <div className="text-light-1">More than 0.01 USDT</div>
                  </div>
                  <div className="my-2 d-flex justify-content-between">
                    <div className="text-light-1">Deposit Confirmation</div>
                    <div className="text-light-1">12 Block(s)</div>
                  </div>
                  <div className="my-2 d-flex justify-content-between">
                    <div className="text-light-1">Withdrawal Confirmation</div>
                    <div className="text-light-1">64 Block(s)</div>
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
