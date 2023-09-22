import classes from "./Checkbox.module.css";

const Checkbox = ({ label }) => {
  return (
    <label className={classes.container}>
      {label} <input type="checkbox" />
      <span className={classes.checkmark}></span>
    </label>
  );
};

export default Checkbox;
