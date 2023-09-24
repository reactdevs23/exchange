import {
  finance,
  funding,
  future,
  margin,
  overview,
  trading,
  tradingBot,
} from "../../../images/images";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import classes from "./Sidebar.module.css";

const items = [
  {
    label: "Overview",
    to: "/wallet",
    icon: overview,
  },
  {
    label: "Funding",
    to: "/funding",
    icon: funding,
  },
  {
    label: "Trading",
    to: "/trading",
    icon: trading,
  },
  {
    label: "Margin",
    to: "/margin",
    icon: margin,
  },
  {
    label: "Future",
    to: "/future",
    icon: future,
  },
  {
    label: "Trading Bot",
    to: "/tradingBot",
    icon: tradingBot,
  },
  {
    label: "Finance",
    to: "/finance",
    icon: finance,
  },
];

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      {items.map((el, idx) => {
        return (
          <NavLink
            to={el.to}
            className={({ isActive }) =>
              clsx(isActive && classes.active, classes.link)
            }
          >
            <img src={el.icon} alt={el.label} />
            {el.label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
