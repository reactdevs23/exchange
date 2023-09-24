import DataTable from "react-data-table-component";
import { copy, tether } from "../../../images/images";
import classes from "./WithDrawHistory.module.css";

const columns = [
  {
    name: "Coin",
    selector: (row) => row.coin,
    sortable: true,
    minWidth: "140px",
    cell: (row) => (
      <div className={classes.row}>
        <img className={classes.coinImg} src={row.coinIcon} alt="" />
        <div>
          <h4 className={classes.coin}>{row.coin}</h4>
          <div className={classes.text}>{row.fullName}</div>
        </div>
      </div>
    ),
  },
  {
    name: "Wallet",
    cell: (row) => <div className={classes.text}>{row.wallet}</div>,
  },

  {
    name: "Time",
    selector: (row) => row.total,
    sortable: true,
    cell: (row) => <p className={classes.text}>{row.time}</p>,
  },
  {
    name: "Amount",
    cell: (row) => <p className={classes.text}>{row.amount}</p>,
  },

  {
    name: "Type",
    cell: (row) => <div className={classes.text}>{row.type}</div>,
  },
  {
    name: "Destination",
    minWidth: "140px",
    cell: (row) => (
      <div className={[classes.text, classes.copyContainer].join(" ")}>
        {row.destination}
        <img
          src={copy}
          alt="copy"
          className={classes.copyIcon}
          onClick={() => {
            window.navigator.clipboard.writeText(row.destination);
          }}
        />
      </div>
    ),
  },
  {
    name: "TxID",
    minWidth: "140px",
    cell: (row) => (
      <div className={[classes.text, classes.copyContainer].join(" ")}>
        {row.destination}
        <img
          src={copy}
          alt="copy"
          className={classes.copyIcon}
          onClick={() => {
            window.navigator.clipboard.writeText(row.txID);
          }}
        />
      </div>
    ),
  },
  {
    name: "Status",
    cell: (row) => <div className={classes.text}>{row.status}</div>,
  },
];

const data = [
  {
    id: "withdraw-coin-table-row-1",
    coinIcon: tether,
    coin: "Tether",
    fullName: "USDT",
    wallet: "Spot Wallet",
    time: "2021/03/31 11:39:15",
    amount: "125.58",
    destination: "0x6eF9...7ED10",
    txID: "0x6eF9...7ED10",
    type: "Withdraw",
    status: "Completed",
  },
  {
    id: "withdraw-coin-table-row-2",
    coinIcon: tether,
    coin: "Tether",
    fullName: "USDT",
    wallet: "Spot Wallet",
    time: "2021/03/31 11:39:15",
    amount: "125.58",
    destination: "0x6eF9...7ED10",
    txID: "0x6eF9...7ED10",
    type: "Withdraw",
    status: "Completed",
  },
  {
    id: "withdraw-coin-table-row-3",
    coinIcon: tether,
    coin: "Tether",
    fullName: "USDT",
    wallet: "Spot Wallet",
    time: "2021/03/31 11:39:15",
    amount: "125.58",
    destination: "0x6eF9...7ED10",
    txID: "0x6eF9...7ED10",
    type: "Withdraw",
    status: "Completed",
  },
  {
    id: "withdraw-coin-table-row-4",
    coinIcon: tether,
    coin: "Tether",
    fullName: "USDT",
    wallet: "Spot Wallet",
    time: "2021/03/31 11:39:15",
    amount: "125.58",
    destination: "0x6eF9...7ED10",
    txID: "0x6eF9...7ED10",
    type: "Withdraw",
    status: "Completed",
  },
];

const WithDrawHistory = () => {
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.title}>Deposit History</div>
      <div className={classes.overFlow}>
        <DataTable columns={columns} data={data} />
      </div>

      <p className={classes.viewAll}>View All</p>
    </div>
  );
};

export default WithDrawHistory;
