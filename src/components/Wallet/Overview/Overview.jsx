import { useState } from "react";
import clsx from "clsx";

import { eye } from "../../../images/images";
import Button from "../../Button/Button";
import classes from "./Overview.module.css";
import Coins from "./Coins/Coins";

const tabs = ["PNL", "Today"];

const Overview = () => {
  const [activeTab, setActiveTab] = useState("Today");

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
            <div className={classes.tabs}>
              {tabs.map((el, idx) => {
                return (
                  <div
                    key={"tab-item-" + idx}
                    className={clsx(
                      classes.tab,
                      activeTab === el && classes.active
                    )}
                    onClick={() => setActiveTab(el)}
                  >
                    {el}
                  </div>
                );
              })}
            </div>

            <div className="text-right mt-8">
              <div className="text-green">+$10.91</div>
              <div className="text-green">+0.43%</div>
            </div>
          </div>
        </div>
      </div>
      <Coins />
    </>
  );
};

export default Overview;
