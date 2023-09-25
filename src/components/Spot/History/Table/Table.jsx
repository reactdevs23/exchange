import React, { useState } from "react";
import DataTable from "react-data-table-component";

import { deleteIcon } from "../../../../images/images";
import classes from "./Table.module.css";

const Table = ({ tableData }) => {
  const [data, setData] = useState(tableData);
  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((row) => row.id !== id));
  };
  const columns = [
    {
      name: "Date",
      cell: (row) => <p className={classes.text}>{row.date}</p>,
    },
    {
      name: "Pair",
      cell: (row) => <p className={classes.text}>{row.pair}</p>,
    },
    {
      name: "Type",
      cell: (row) => <p className={classes.text}>{row.type}</p>,
    },
    {
      name: "Side",
      minWidth: "140px",
      cell: (row) => <p className={classes.text}>{row.side}</p>,
    },
    {
      name: "Amount",
      cell: (row) => <p className={classes.text}>{row.amount}</p>,
    },
    {
      name: "Filled",
      cell: (row) => <p className={classes.text}>{row.filled}</p>,
    },
    {
      name: "Total",
      cell: (row) => <p className={classes.text}>{row.total}</p>,
    },
    {
      name: "Trigger Conditions",
      cell: (row) => (
        <p className={[classes.text, classes.triggerCondition].join(" ")}>
          Mark Price
          <br />
          >= {row.triggerCondition}
        </p>
      ),
    },
    {
      name: "",
      cell: (row) => (
        <div className={classes.buttonContainer}>
          <button className={classes.viewButton}>View</button>
          <img
            src={deleteIcon}
            alt="#"
            className={classes.deleteIcon}
            onClick={() => handleDelete(row.id)}
          />
        </div>
      ),
    },
  ];
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.overFlow}>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Table;
