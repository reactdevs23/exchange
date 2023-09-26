import { useState } from "react";
import clsx from "clsx";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { eye } from "../../../images/images";
import Button from "../../Button/Button";
import classes from "./Overview.module.css";
import Coins from "./Coins/Coins";

const Overview = () => {
  const [active, setActive] = useState(0);
  const [dropdown, setDropDown] = useState(false);
  const dropdownItems = [
    { title: "Today", value: ["+$10.91", "+0.43%"] },
    { title: "Yesterday", value: ["+$50.91", "+0.13%"] },
  ];
  const handleDropDown = () => {
    if (dropdown) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };
  return (
    <>
      <div className={classes.overview}>
        <div className={classes.top}>
          <h4 className={classes.title}>Overview</h4>
          <div className={classes.btns}>
            <Button primary rounded onClick={() => {}}>
              Buy
            </Button>
            <Button primary rounded onClick={() => {}}>
              Deposit
            </Button>
            <Button primary rounded onClick={() => {}}>
              Transfer
            </Button>
            <Button primary rounded onClick={() => {}}>
              Earn
            </Button>
          </div>
        </div>
        <div className={classes.bottom}>
          <div>
            <div className={classes.subTitle1}>
              Total Assets <img src={eye} alt="eye" />
            </div>
            <div className={classes.subTitle2}>0.09643544 BTC</div>
            <div className={classes.subTitle3}>≈ $2,527.45</div>
          </div>
          <div className={classes.right}>
            <p className={classes.text}>PNL</p>

            <div className={classes.valuesWrapper}>
              <div className={classes.dropdown}>
                <p className={clsx(classes.tab)} onClick={handleDropDown}>
                  {dropdownItems[active].title}
                  {dropdown ? (
                    <BiChevronUp className={classes.arrow} />
                  ) : (
                    <BiChevronDown className={classes.arrow} />
                  )}
                </p>
                {dropdown && (
                  <div className={classes.dropdownItems}>
                    {dropdownItems.map((el, i) => (
                      <p
                        key={i}
                        onClick={() => {
                          setDropDown(false);
                          setActive(i);
                        }}
                      >
                        {el.title}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <div className={classes.valueContainer}>
                <p className={classes.green}>
                  {" "}
                  {dropdownItems[active].value[0]}
                </p>
                <p className={classes.green}>
                  {" "}
                  {dropdownItems[active].value[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Coins />
    </>
  );
};

export default Overview;
