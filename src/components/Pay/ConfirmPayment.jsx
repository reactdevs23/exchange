import clsx from "clsx";

import { doubleArrow, money, userAvatar } from "../../images/images";
import Dropdown from "../../components/Dropdown/Dropdown";
import classes from "./Pay.module.css";

const ConfirmPayment = ({ onPrev, onContinue }) => {
  return (
    <div className={classes.confirmPayment}>
      <div
        className={clsx(
          classes.profile,
          "d-flex flex-column flex-sm-row justify-content-center gap-5 align-items-center"
        )}
      >
        <div className="d-flex flex-column align-items-center gap-2">
          <img src={userAvatar} alt="avatar" />
          <div className="fw-bold">200 USDT</div>
        </div>

        <div className={classes.covert}>
          <img src={doubleArrow} alt="" />
        </div>

        <div className="d-flex flex-column align-items-center gap-2">
          <img src={userAvatar} alt="avatar" />
          <div className="fw-bold">Alex Smith</div>
        </div>
      </div>

      <div className="mt-46">
        <div className="fw-bold mb-3">Payment Method</div>

        <Dropdown
          pattern1
          smallIcon
          placeholder="Choose currency"
          options={[
            {
              img: money,
              title: "Funding Account",
              subTitle: "Available: 500 USDT",
            },
          ]}
          onSelect={(val) => {}}
        />
      </div>

      <div className="d-flex gap-4 mt-4">
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

export default ConfirmPayment;
