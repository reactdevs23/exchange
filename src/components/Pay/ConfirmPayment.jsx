import { doubleArrow, money, tether, userAvatar } from "../../images/images";
import Dropdown from "../../components/Dropdown/Dropdown";
import classes from "./Pay.module.css";

const ConfirmPayment = ({ onPrev, setPaymentSuccessFull }) => {
  return (
    <div className={classes.confirmPayment}>
      <div className={classes.profile}>
        <div className={classes.imgAndAmount}>
          <img src={tether} alt="avatar" />
          <h4 className={classes.bold}>200 USDT</h4>
        </div>

        <div className={classes.covert}>
          <img src={doubleArrow} alt="" />
        </div>

        <div className={classes.imgAndAmount}>
          <img src={userAvatar} alt="avatar" />
          <h4 className={classes.bold}>Alex Smith</h4>
        </div>
      </div>

      <div className={classes.dropdownContainer}>
        <h4 className={classes.dropDownTitle}>Payment Method</h4>

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

      <div className={classes.buttonContainer}>
        <button onClick={onPrev} className={classes.previous}>
          Previous Step
        </button>
        <button
          className={classes.continue}
          onClick={() => {
            setPaymentSuccessFull(true);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ConfirmPayment;
