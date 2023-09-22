import { useState } from "react";
import clsx from "clsx";

import EmailIdInput from "./EmailIdInput";
import EnterAmount from "./EnterAmount";
import ConfirmPayment from "./ConfirmPayment";
import Withdraw from "./Withdraw";
import classes from "./Pay.module.css";

const Pay = () => {
  const [step, setStep] = useState(1);
  return (
    <div style={{ paddingBottom: "60px" }}>
      {step <= 3 && (
        <div className={classes.stepsContainer}>
          <div className={clsx(classes.step, step >= 1 && classes.active)}>
            <div className={classes.number}>
              1<div className={classes.dottedLine}></div>
            </div>
            <div className={classes.label}>Select Coin</div>
          </div>
          <div className={clsx(classes.step, step >= 2 && classes.active)}>
            <div className={classes.number}>2</div>
            <div className={classes.label}>Enter Amount</div>
          </div>
          <div className={clsx(classes.step, step >= 3 && classes.active)}>
            <div className={classes.number}>3</div>
            <div className={classes.label}>Confirm Payment</div>
          </div>
        </div>
      )}
      {step === 1 && <EmailIdInput onContinue={() => setStep(2)} />}
      {step === 2 && (
        <EnterAmount onPrev={() => setStep(1)} onContinue={() => setStep(3)} />
      )}
      {step === 3 && (
        <ConfirmPayment
          onPrev={() => setStep(2)}
          onContinue={() => setStep(4)}
        />
      )}

      {step === 4 && <Withdraw />}
    </div>
  );
};

export default Pay;
