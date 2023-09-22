import clsx from "clsx";

import classes from "./Button.module.css";

const Button = ({ icon, rounded, primary, outlined, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        classes.btn,
        primary && classes.primary,
        rounded && classes.rounded,
        outlined && classes.outlined
      )}
    >
      {icon && (
        <span className={classes.icon}>
          <img className="d-block" src={icon} alt="btn" />
        </span>
      )}
      <span className={classes.text}>{children}</span>
    </button>
  );
};

export default Button;
