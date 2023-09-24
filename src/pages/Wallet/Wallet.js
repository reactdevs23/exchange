import Sidebar from "../../components/Wallet/Sidebar/Sidebar";
import Coins from "../../components/Wallet/Overview/Coins/Coins";
import Overview from "../../components/Wallet/Overview/Overview";

import classes from "./Wallet.module.css";

const Wallet = () => {
  return (
    <div className={classes.mainWrap}>
      <div className={classes.content}>
        <Sidebar />

        <div className={classes.main}>
          <Overview />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
