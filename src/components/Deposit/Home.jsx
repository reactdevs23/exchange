import Sidebar from "components/Sidebar/Sidebar";
import Coins from "components/Home/Coins/Coins";
import Overview from "components/Home/Overview/Overview";
import DepositCrypto from "components/Home/DepositCrypto/DepositCrypto";
import DepositHistory from "components/Home/DepositHistory/DepositHistory";
import Pay from "components/Home/Pay/Pay";
import Convert from "components/Home/Convert/Convert";

import classes from "./Home.module.css";

export const Home = () => {
  return (
    <div className={classes.mainWrap}>
      <div className={classes.content}>
        <Sidebar />

        <div className={classes.main}>
          <Overview />
          <Coins />
        </div>
      </div>

      <div className={classes.below}>
        <DepositCrypto />
        <DepositHistory />
        <Pay />
        <Convert />
      </div>
    </div>
  );
};
