import { useState } from "react";
import clsx from "clsx";

import CommonPays from "./CommonPays/CommonPays";
import EnterAmount from "./EnterAmount";
import ConfirmPayment from "./ConfirmPayment";
import classes from "./Pay.module.css";

const Pay = ({ setPaymentSuccessFull }) => {
  const [step, setStep] = useState(1);
  return (
    <section className={classes.mainWrapper}>
      {" "}
      <div>
        {step <= 3 && (
          <div className={classes.stepsContainer}>
            <div className={clsx(classes.step, step >= 1 && classes.active)}>
              <div className={classes.number}>
                1<div className={classes.dottedLine}></div>
              </div>
              <p className={classes.label}>Select Coin</p>
            </div>
            <div className={clsx(classes.step, step >= 2 && classes.active)}>
              <div className={classes.number}>2</div>
              <p className={classes.label}>Enter Amount</p>
            </div>
            <div className={clsx(classes.step, step >= 3 && classes.active)}>
              <div className={classes.number}>3</div>
              <p className={classes.label}>Confirm Payment</p>
            </div>
          </div>
        )}
        {step === 1 && <CommonPays onContinue={() => setStep(2)} />}
        {step === 2 && (
          <EnterAmount
            onPrev={() => setStep(1)}
            onContinue={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <ConfirmPayment
            setPaymentSuccessFull={setPaymentSuccessFull}
            onPrev={() => setStep(2)}
            // onContinue={() => setStep(4)}
          />
        )}
      </div>
    </section>
  );
};

export default Pay;
