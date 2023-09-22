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
      <div className="d-flex gap-2">
        <img className={classes.coinImg} src={row.coinIcon} alt="" />
        <div>
          <div className="fw-bold">{row.coin}</div>
          <div className="text-light-1">{row.fullName}</div>
        </div>
      </div>
    ),
  },
  {
    name: "Time",
    selector: (row) => row.total,
    sortable: true,
    cell: (row) => <div className="text-light-1">{row.time}</div>,
  },
  {
    name: "Amount",
    cell: (row) => <div className="text-light-1">{row.amount}</div>,
  },
  {
    name: "Blockchain Record",
    minWidth: "140px",
    cell: (row) => (
      <div className="text-primary-1">
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          View Transaction
        </a>
      </div>
    ),
  },
  {
    name: "Status",
    cell: (row) => <div className="text-light-1">{row.status}</div>,
  },
  {
    name: "Remarks",
    cell: (row) => <div className="text-light-1">{row.remarks}</div>,
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
    <div className="">
      <div className="fs-4 fw-bold mb-3">Deposit History</div>
      <div className="overflow-auto">
        <DataTable columns={columns} data={data} />
      </div>

      <div className="text-center text-underline mt-5 c-pointer">View All</div>
    </div>
  );
};

export default DepositHistory;
