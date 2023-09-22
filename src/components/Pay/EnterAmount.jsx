import { tether, userAvatar } from "../../images/images";
import Dropdown from "../../components/Dropdown/Dropdown";
import classes from "./Pay.module.css";

const EnterAmount = ({ onPrev, onContinue }) => {
  return (
    <div className={classes.enterAmountWrap}>
      <div className={classes.profile}>
        <img src={userAvatar} alt="avatar" />
        <div className="fw-bold">Alex Smith</div>
      </div>

      <div className="mt-46">
        <div className="fw-bold mb-3">Currency</div>

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

      <div className="mt-4">
        <div className="fw-bold mb-3">Amount</div>

        <div className="relative">
          <input className="" type="text" />

          <div className={classes.usdt}>
            <svg
              width="19"
              height="27"
              viewBox="0 0 19 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 16L0 16L9.5 27L19 16Z" fill="#6C62E2" />
              <path d="M0 11L19 11L9.5 0L0 11Z" fill="#6C62E2" />
            </svg>

            <div className="text-light-1">USDT</div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="fw-bold mb-3">Note (Optional)</div>

        <input
          className=""
          type="text"
          placeholder="Enter Note (Visible to the other party)"
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

export default EnterAmount;
