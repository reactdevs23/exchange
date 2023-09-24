import DataTable from "react-data-table-component";
import { tether } from "../../../images/images";
import classes from "./DepositHistory.module.css";

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
    name: "Blockchain Record",
    minWidth: "140px",
    cell: (row) => (
      <div>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
          className={classes.primaryColor}
        >
          View Transaction
        </a>
      </div>
    ),
  },
  {
    name: "Status",
    cell: (row) => <div className={classes.text}>{row.status}</div>,
  },
  {
    name: "Remarks",
    cell: (row) => <div className={classes.text}>{row.remarks}</div>,
  },
];

const data = [
  {
    id: "deposit-coin-table-row-1",
    coinIcon: tether,
    coin: "Tether",
    fullName: "USDT",
    time: "2021/03/31 11:39:15",
    amount: "125.58",
    status: "Completed",
    remarks: "Deposit",
  },
  {
    id: "deposit-coin-table-row-2",
    coinIcon: tether,
    coin: "Tether",
    fullName: "USDT",
    time: "2021/03/31 11:39:15",
    amount: "125.58",
    status: "Completed",
    remarks: "Deposit",
  },
  {
    id: "deposit-coin-table-row-3",
    coinIcon: tether,
    coin: "Tether",
    fullName: "USDT",
    time: "2021/03/31 11:39:15",
    amount: "125.58",
    status: "Completed",
    remarks: "Deposit",
  },
  {
    id: "deposit-coin-table-row-4",
    coinIcon: tether,
    coin: "Tether",
    fullName: "USDT",
    time: "2021/03/31 11:39:15",
    amount: "125.58",
    status: "Completed",
    remarks: "Deposit",
  },
];

const DepositHistory = () => {
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

export default DepositHistory;
