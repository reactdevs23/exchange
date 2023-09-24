import classes from "./Checkbox.module.css";

const Checkbox = ({ label, onClick, checked }) => {
  return (
    <label className={classes.container}>
      {label} <input type="checkbox" checked={checked} onChange={onClick} />
      <span className={classes.checkmark}></span>
    </label>
  );
};

export default Checkbox;
